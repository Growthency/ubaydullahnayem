"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} mode`}
      className="theme-toggle"
    >
      <span className="knob" aria-hidden />
      <span className="sr-only">Toggle theme</span>
      <span className="absolute left-2 text-[10px] opacity-60">
        <Sun size={12} />
      </span>
      <span className="absolute right-2 text-[10px] opacity-60">
        <Moon size={12} />
      </span>
    </button>
  );
}
