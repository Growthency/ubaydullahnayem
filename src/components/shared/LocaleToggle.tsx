"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";

/**
 * Language switcher.
 *   বাং → / (or strips an /en prefix)
 *   EN  → /en (or /en/<current-path>)
 *
 * Optimistically flips the locale on click (instant UI swap), then
 * navigates so the URL itself reflects the language — /en is a real,
 * shareable address. The middleware + LocaleProvider keep the rest
 * in sync from the URL.
 */
export function LocaleToggle({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const { locale, setLocale } = useLocale();

  const stripped = pathname.replace(/^\/en(?=\/|$)/, "") || "/";

  const goBn = () => {
    if (locale !== "bn") setLocale("bn");
    router.push(stripped);
  };

  const goEn = () => {
    if (locale !== "en") setLocale("en");
    router.push(stripped === "/" ? "/en" : `/en${stripped}`);
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center text-[11px] tracking-[0.18em] uppercase rounded-full border border-border bg-paper/60 backdrop-blur p-0.5",
        className,
      )}
    >
      <button
        type="button"
        onClick={goBn}
        aria-pressed={locale === "bn"}
        className={cn(
          "px-3 py-1 rounded-full transition-colors",
          locale === "bn" ? "bg-emerald text-paper" : "text-ink-muted hover:text-emerald",
        )}
      >
        বাং
      </button>
      <button
        type="button"
        onClick={goEn}
        aria-pressed={locale === "en"}
        className={cn(
          "px-3 py-1 rounded-full transition-colors",
          locale === "en" ? "bg-emerald text-paper" : "text-ink-muted hover:text-emerald",
        )}
      >
        EN
      </button>
    </div>
  );
}
