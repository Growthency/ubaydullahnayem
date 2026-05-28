"use client";

import { LenisProvider } from "@/components/providers/LenisProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { NoiseOverlay } from "@/components/effects/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { WhatsAppFab } from "@/components/shared/WhatsAppFab";
import { Toaster } from "sonner";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ThemeProvider>
        <LenisProvider>
          <NoiseOverlay />
          <CustomCursor />
          <TopBar />
          <Navbar />
          <main id="main-content" className="pt-32 min-h-[60vh]">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
          <ScrollToTop />
          <Toaster position="top-center" theme="light" />
        </LenisProvider>
      </ThemeProvider>
    </LocaleProvider>
  );
}
