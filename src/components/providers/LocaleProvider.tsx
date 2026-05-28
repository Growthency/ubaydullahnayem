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

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("bn");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (typeof window !== "undefined"
      ? localStorage.getItem(STORAGE_KEY)
      : null) as Locale | null;
    if (saved === "en" || saved === "bn") setLocale(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-locale", locale);
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, mounted]);

  const toggle = () => setLocale((l) => (l === "bn" ? "en" : "bn"));

  return (
    <LocaleContext.Provider value={{ locale, toggle, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
