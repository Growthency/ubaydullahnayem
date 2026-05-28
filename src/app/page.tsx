import { Hero } from "@/components/sections/Hero";
import { MarqueeBand } from "@/components/sections/Marquee";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { MadrasahPreview } from "@/components/sections/MadrasahPreview";
import { Stats } from "@/components/sections/Stats";
import { LecturesPreview } from "@/components/sections/LecturesPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CtaBand } from "@/components/sections/CtaBand";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <AboutPreview />
      <QuoteBand />
      <MadrasahPreview />
      <Stats />
      <LecturesPreview />
      <BlogPreview />
      <CtaBand />
    </>
  );
}
