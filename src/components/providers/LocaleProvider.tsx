"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

export type Locale = "bn" | "en";

type Ctx = {
  locale: Locale;
  toggle: () => void;
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<Ctx>({
  locale: "bn",
  toggle: () => {},
  setLocale: () => {},
});

const STORAGE_KEY = "un-locale";
const COOKIE_NAME = "un-locale";

function readCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(/(?:^|;\s*)un-locale=(en|bn)/);
  return m ? (m[1] as Locale) : null;
}

function writeCookie(value: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
}

/**
 * URL is the single source of truth for language:
 *   - pathname under /en  → English
 *   - everything else      → Bangla (default)
 *
 * This runs on every navigation (usePathname dependency), so the
 * client-side toggle + router.push("/en") immediately re-derives the
 * locale without waiting on a cookie round-trip.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const [locale, setLocaleState] = useState<Locale>("bn");

  // Derive from URL on every navigation.
  useEffect(() => {
    const urlIsEn = pathname === "/en" || pathname.startsWith("/en/");
    const next: Locale = urlIsEn ? "en" : "bn";
    setLocaleState(next);
    document.documentElement.setAttribute("data-locale", next);
    localStorage.setItem(STORAGE_KEY, next);
    writeCookie(next);
  }, [pathname]);

  // Manual override used by the toggle for an instant optimistic update
  // (the router.push that follows keeps the URL in sync).
  const setLocale = (l: Locale) => {
    setLocaleState(l);
    document.documentElement.setAttribute("data-locale", l);
    localStorage.setItem(STORAGE_KEY, l);
    writeCookie(l);
  };

  const toggle = () => setLocale(locale === "bn" ? "en" : "bn");

  return (
    <LocaleContext.Provider value={{ locale, toggle, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);

export { readCookie };
