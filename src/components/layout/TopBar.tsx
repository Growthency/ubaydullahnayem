"use client";

import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { LocaleToggle } from "@/components/shared/LocaleToggle";
import { FacebookIcon, YoutubeIcon } from "@/components/shared/SocialIcons";
import { cn } from "@/lib/utils";

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-label="Quick links"
      className={cn(
        "fixed top-0 inset-x-0 z-50 text-[11px] tracking-[0.04em] transition-all duration-300",
        scrolled
          ? "h-0 opacity-0 pointer-events-none -translate-y-full"
          : "h-9 opacity-100",
      )}
    >
      <div className="h-full bg-emerald-deep text-paper/90">
        <div className="container-page h-full flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-5 text-paper/80">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-gold-bright transition-colors"
            >
              <Phone size={11} />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden md:inline-flex items-center gap-1.5 hover:text-gold-bright transition-colors"
            >
              <Mail size={11} />
              {site.email}
            </a>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <LocaleToggle className="bg-paper/10 border-paper/15 [&_button]:text-paper/70 [&_button:hover]:text-gold-bright [&_button[aria-pressed='true']]:bg-gold-bright [&_button[aria-pressed='true']]:text-emerald-deep" />
            <span className="hidden sm:block w-px h-4 bg-paper/20" />
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid place-items-center w-7 h-7 rounded-full bg-paper/10 hover:bg-gold-bright hover:text-emerald-deep transition-colors"
            >
              <FacebookIcon size={13} />
            </a>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="grid place-items-center w-7 h-7 rounded-full bg-paper/10 hover:bg-gold-bright hover:text-emerald-deep transition-colors"
            >
              <YoutubeIcon size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
