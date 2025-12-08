import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/en") ||
    pathname.startsWith("/ar") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/assets") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const targetPath = `/ar${pathname === "/" ? "" : pathname}`;
  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/:path*"],
};
