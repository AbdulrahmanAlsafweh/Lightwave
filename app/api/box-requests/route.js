import { NextResponse } from "next/server";

const UPSTREAM_ENDPOINT =
  process.env.BOX_REQUESTS_ENDPOINT || "http://radius.lightwaveltd.com/api/box-requests";
const UPSTREAM_BEARER_TOKEN = process.env.BOX_REQUESTS_BEARER_TOKEN || "";
const UPSTREAM_CSRF_PAGE = process.env.BOX_REQUESTS_CSRF_PAGE || "";
const UPSTREAM_VERTIO_SECRET =
  process.env.BOX_REQUESTS_VERTIO_SECRET || "dSINy8OiQoVTtBLEihZMAIzaSyDC4OYL";

function tryParseJson(text) {
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function getSetCookieValues(headers) {
  if (typeof headers.getSetCookie === "function") {
    return headers.getSetCookie();
  }

  const setCookie = headers.get("set-cookie");
  return setCookie ? [setCookie] : [];
}

function toCookieHeader(setCookieValues) {
  return setCookieValues
    .map((cookie) => cookie.split(";")[0])
    .filter(Boolean)
    .join("; ");
}

function getCsrfTokenFromHtml(html) {
  if (!html) {
    return null;
  }

  const match = html.match(/name=["']csrf-token["'][^>]*content=["']([^"']+)["']/i);
  return match?.[1] || null;
}

function getUpstreamOrigin(url) {
  const parsed = new URL(url);
  return `${parsed.protocol}//${parsed.host}`;
}

function sanitizeUpstreamJson(json) {
  if (!json || typeof json !== "object" || Array.isArray(json)) {
    return json;
  }

  const cleaned = { ...json };
  delete cleaned.trace;
  delete cleaned.file;
  delete cleaned.line;
  delete cleaned.exception;

  return cleaned;
}

async function getCsrfContext() {
  const upstreamOrigin = getUpstreamOrigin(UPSTREAM_ENDPOINT);
  const csrfPage = UPSTREAM_CSRF_PAGE || `${upstreamOrigin}/`;

  const csrfPageResponse = await fetch(csrfPage, {
    method: "GET",
    headers: {
      Accept: "text/html,application/xhtml+xml",
    },
    cache: "no-store",
  });

  const html = await csrfPageResponse.text();
  const csrfToken = getCsrfTokenFromHtml(html);
  const cookies = getSetCookieValues(csrfPageResponse.headers);
  const cookieHeader = toCookieHeader(cookies);

  return {
    csrfToken,
    cookieHeader,
    csrfPage,
    upstreamOrigin,
  };
}

async function postToUpstream(payload, csrfContext = null) {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Vertio-Secret": UPSTREAM_VERTIO_SECRET,
  };

  if (UPSTREAM_BEARER_TOKEN) {
    headers.Authorization = `Bearer ${UPSTREAM_BEARER_TOKEN}`;
  }

  if (csrfContext?.csrfToken) {
    headers["X-CSRF-TOKEN"] = csrfContext.csrfToken;
    headers["X-Requested-With"] = "XMLHttpRequest";
  }

  if (csrfContext?.cookieHeader) {
    headers.Cookie = csrfContext.cookieHeader;
  }

  if (csrfContext?.csrfPage) {
    headers.Referer = csrfContext.csrfPage;
  }

  if (csrfContext?.upstreamOrigin) {
    headers.Origin = csrfContext.upstreamOrigin;
  }

  const response = await fetch(UPSTREAM_ENDPOINT, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const responseText = await response.text();
  const responseJson = tryParseJson(responseText);

  return {
    response,
    responseText,
    responseJson,
  };
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON body." },
      { status: 400 }
    );
  }

  try {
    let upstreamResult = await postToUpstream(payload, null);

    // Some Laravel upstreams put this endpoint in web middleware.
    // Try one CSRF bootstrap + retry before returning 419 to the client.
    if (upstreamResult.response.status === 419) {
      try {
        const csrfContext = await getCsrfContext();
        upstreamResult = await postToUpstream(payload, csrfContext);
      } catch {
        // Ignore CSRF bootstrap failure and return original upstream response below.
      }
    }

    const status = upstreamResult.response.status;
    const responseJson = sanitizeUpstreamJson(upstreamResult.responseJson);

    if (responseJson) {
      return NextResponse.json(responseJson, { status });
    }

    return new NextResponse(upstreamResult.responseText || "", {
      status,
      headers: {
        "Content-Type":
          upstreamResult.response.headers.get("content-type") ||
          "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to reach upstream box request API.",
        error: error?.message || "Unknown error",
      },
      { status: 502 }
    );
  }
}
