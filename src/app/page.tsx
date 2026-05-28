import { Hero } from "@/components/sections/Hero";
import { MarqueeBand } from "@/components/sections/Marquee";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { MadrasahPreview } from "@/components/sections/MadrasahPreview";
import { Stats } from "@/components/sections/Stats";
import { WritingsPreview } from "@/components/sections/WritingsPreview";
import { LecturesPreview } from "@/components/sections/LecturesPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <AboutPreview />
      <QuoteBand />
      <MadrasahPreview />
      <Stats />
      <WritingsPreview />
      <LecturesPreview />
      <BlogPreview />
      <Testimonials />
      <CtaBand />
    </>
  );
}
