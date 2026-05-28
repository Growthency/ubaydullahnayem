"use client";

import { cn } from "@/lib/utils";

export function MarqueeStrip({
  items,
  direction = "left",
  className,
}: {
  items: string[];
  direction?: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-32 before:bg-gradient-to-r before:from-paper before:to-transparent before:z-10 before:pointer-events-none",
        "after:absolute after:right-0 after:top-0 after:bottom-0 after:w-32 after:bg-gradient-to-l after:from-paper after:to-transparent after:z-10 after:pointer-events-none",
        className,
      )}
    >
      <div
        className={cn(
          "flex whitespace-nowrap w-max",
          direction === "left" ? "marquee-left" : "marquee-right",
        )}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-10 text-2xl md:text-3xl font-display tracking-tight text-ink-soft/60 flex items-center gap-10"
          >
            {item}
            <span aria-hidden className="inline-block w-2 h-2 rounded-full bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}
