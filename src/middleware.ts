import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED = ["/practice", "/exams", "/tutor", "/progress", "/admin"];
const ADMIN_ONLY = ["/admin"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("mw_session")?.value;

  const isProtected = PROTECTED.some((p) => pathname.startsWith(p));

  if (isProtected && !token) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/practice/:path*", "/exams/:path*", "/tutor/:path*", "/progress/:path*", "/admin/:path*"],
};