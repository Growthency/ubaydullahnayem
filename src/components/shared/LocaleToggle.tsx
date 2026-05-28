"use client";

import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

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
        onClick={() => setLocale("bn")}
        aria-pressed={locale === "bn"}
        className={cn(
          "px-3 py-1 rounded-full transition-colors",
          locale === "bn"
            ? "bg-emerald text-paper"
            : "text-ink-muted hover:text-emerald",
        )}
      >
        বাং
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "px-3 py-1 rounded-full transition-colors",
          locale === "en"
            ? "bg-emerald text-paper"
            : "text-ink-muted hover:text-emerald",
        )}
      >
        EN
      </button>
    </div>
  );
}
