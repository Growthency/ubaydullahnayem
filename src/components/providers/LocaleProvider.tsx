"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

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

function readCookie(name: string): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  if (!match) return null;
  const v = decodeURIComponent(match[1]);
  return v === "en" || v === "bn" ? v : null;
}

function writeCookie(value: Locale) {
  if (typeof document === "undefined") return;
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${oneYear}; samesite=lax`;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Initial state comes from <html data-locale="…"> which the middleware
  // sets via cookie + the pre-paint script in layout.tsx reads from
  // localStorage, so this is just the React mirror.
  const [locale, setLocale] = useState<Locale>("bn");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Cookie (set by middleware on /en visits) wins over localStorage,
    // because URL is the source of truth for an explicit /en entry.
    const fromCookie = readCookie(COOKIE_NAME);
    const fromStorage =
      typeof window !== "undefined"
        ? (localStorage.getItem(STORAGE_KEY) as Locale | null)
        : null;
    const initial = fromCookie ?? fromStorage ?? "bn";
    setLocale(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-locale", locale);
    localStorage.setItem(STORAGE_KEY, locale);
    writeCookie(locale);
  }, [locale, mounted]);

  const toggle = () => setLocale((l) => (l === "bn" ? "en" : "bn"));

  return (
    <LocaleContext.Provider value={{ locale, toggle, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
