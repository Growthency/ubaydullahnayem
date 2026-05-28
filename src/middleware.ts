import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * /en URL routing
 * ---------------
 * Two clean entrypoints:
 *   /         → Bangla (default)
 *   /en       → English (rewrites to / + persists locale via cookie)
 *   /en/about → /about + English locale
 *
 * Once the cookie is set, internal navigation keeps the chosen locale.
 * Visiting bare `/` again resets to Bangla unless the user explicitly
 * picked English via the toolbar toggle (that also sets the cookie).
 */
const LOCALE_COOKIE = "un-locale";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Hard reset to Bangla when the visitor lands on the bare root /
  // — keeps "Bangla default at /" guarantee even after they've been on /en.
  if (pathname === "/") {
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, "bn", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return res;
  }

  // /en or /en/...  → strip the prefix and pin English.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/en" ? "/" : pathname.slice(3);
    const res = NextResponse.rewrite(url);
    res.cookies.set(LOCALE_COOKIE, "en", {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Run on everything except Next internals + static files.
    "/((?!_next/|api/|.*\\..*).*)",
  ],
};
