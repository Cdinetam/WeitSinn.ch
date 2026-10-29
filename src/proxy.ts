import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host === "weitsinn.ch") {
    const url = request.nextUrl.clone();
    url.host = "www.weitsinn.ch";
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
