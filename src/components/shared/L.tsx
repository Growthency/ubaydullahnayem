import type { ReactNode } from "react";

/**
 * Inline bilingual renderer.
 *
 * Renders both English and Bengali strings in the DOM. CSS in
 * globals.css hides the inactive language based on the
 * `data-locale` attribute on <html>, which the LocaleProvider
 * controls. This keeps the server render hydration-safe and gives
 * us a SSR default of Bengali without flicker.
 *
 *   <L en="About" bn="পরিচয়" />
 */
export function L({ en, bn }: { en: ReactNode; bn: ReactNode }) {
  return (
    <>
      <span data-lang="en">{en}</span>
      <span data-lang="bn" className="font-bn">{bn}</span>
    </>
  );
}

/** Returns the active value for SSR/server components using a fallback. */
export function pickLocale<T>(en: T, bn: T, locale: "en" | "bn" = "bn"): T {
  return locale === "en" ? en : bn;
}
