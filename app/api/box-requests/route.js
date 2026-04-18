import { NextResponse } from "next/server";

const UPSTREAM_ENDPOINT =
  process.env.BOX_REQUESTS_ENDPOINT || "http://radius.lightwaveltd.com/api/box-requests";

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
    const upstreamResponse = await fetch(UPSTREAM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const responseText = await upstreamResponse.text();
    const responseJson = tryParseJson(responseText);

    if (responseJson) {
      return NextResponse.json(responseJson, {
        status: upstreamResponse.status,
      });
    }

    return new NextResponse(responseText || "", {
      status: upstreamResponse.status,
      headers: {
        "Content-Type":
          upstreamResponse.headers.get("content-type") || "text/plain; charset=utf-8",
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
