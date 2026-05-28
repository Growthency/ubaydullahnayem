"use client";

import { type ReactNode, type MouseEvent, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "gold" | "ghost";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: Variant;
  strength?: number;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-mag btn-mag-primary",
  gold: "btn-mag btn-mag-gold",
  ghost: "btn-mag btn-mag-ghost",
};

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  strength = 0.32,
  target,
  rel,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const cls = cn(variantClass[variant], className);

  if (href) {
    const isExternal = /^https?:/.test(href);
    if (isExternal) {
      return (
        <a
          ref={ref as React.RefObject<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={cls}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        aria-label={ariaLabel}
        className={cls}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cls}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  );
}
