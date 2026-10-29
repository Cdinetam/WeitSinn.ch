import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18n = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  if (host === "weitsinn.ch") {
    const url = request.nextUrl.clone();
    url.host = "www.weitsinn.ch";
    url.protocol = "https";
    return NextResponse.redirect(url, 308);
  }
  return handleI18n(request);
}

export const config = {
  // Match pages only; skip API, Next internals, Vercel internals, and static files.
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
