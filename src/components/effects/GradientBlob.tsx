"use client";

import { cn } from "@/lib/utils";

type Tone = "emerald" | "gold" | "mix" | "sage" | "midnight";
type Size = "sm" | "md" | "lg" | "xl" | "hero";

const sizes: Record<Size, string> = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-[28rem] h-[28rem]",
  xl: "w-[40rem] h-[40rem]",
  hero: "w-[55rem] h-[55rem]",
};

const tones: Record<Tone, string> = {
  emerald: "bg-emerald",
  gold: "bg-gold",
  sage: "bg-sage",
  midnight: "bg-midnight",
  mix: "bg-gradient-to-br from-emerald via-emerald-bright to-gold",
};

export function GradientBlob({
  tone = "emerald",
  size = "lg",
  className,
  opacity = 0.18,
}: {
  tone?: Tone;
  size?: Size;
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute rounded-full blur-3xl pointer-events-none blob",
        sizes[size],
        tones[tone],
        className,
      )}
      style={{ opacity }}
    />
  );
}
