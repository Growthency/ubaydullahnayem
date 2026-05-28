import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { writings, type Writing } from "@/lib/data/writings";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ArabesqueBackdrop } from "@/components/effects/ArabesqueBackdrop";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Writings",
  description: "Essays, khutbah notes, open letters, and short booklets — written on the side of teaching.",
  path: "/writings",
});

const kindLabel: Record<Writing["kind"], string> = {
  essay: "Essay",
  khutbah: "Khutbah",
  letter: "Letter",
  booklet: "Booklet",
};

export default function WritingsPage() {
  const grouped = writings.reduce<Record<string, Writing[]>>((acc, w) => {
    const key = String(w.year);
    (acc[key] ||= []).push(w);
    return acc;
  }, {});
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <GradientBlob tone="gold" size="xl" opacity={0.14} className="-top-40 -right-32" />
        <GradientBlob tone="emerald" size="lg" opacity={0.10} className="bottom-10 -left-32" />
        <ArabesqueBackdrop className="text-emerald" />

        <div className="container-page grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="kicker">Writings · রচনা</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.96] tracking-tight balance">
                Notes from <span className="italic-display gradient-text">the desk between classes</span>.
              </h1>
            </ScrollReveal>
          </div>
          <ScrollReveal className="lg:col-span-5" delay={0.15}>
            <p className="text-lg text-ink-soft leading-relaxed pretty">
              Short essays, khutbah excerpts, parent letters, and the occasional
              practical booklet. Mostly under ten minutes. None of them written
              for applause — all of them written to be used this week.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* By year */}
      <section className="section-pad bg-paper-2 relative overflow-hidden">
        <div className="container-page flex flex-col gap-20">
          {years.map((year) => (
            <div key={year}>
              <ScrollReveal>
                <div className="flex items-end justify-between mb-8">
                  <h2 className="font-display text-5xl md:text-7xl tracking-tight text-ink/15 numeral leading-none">
                    {year}
                  </h2>
                  <div className="text-xs tracking-[0.2em] uppercase text-ink-muted">
                    {grouped[year].length} {grouped[year].length === 1 ? "piece" : "pieces"}
                  </div>
                </div>
              </ScrollReveal>

              <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {grouped[year].map((w) => (
                  <StaggerItem key={w.slug}>
                    <article
                      id={w.slug}
                      className="group h-full rounded-card-lg bg-paper border border-border p-8 hover:border-emerald/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                    >
                      <div className="flex items-center justify-between text-xs tracking-[0.18em] uppercase text-ink-muted">
                        <span className="px-3 py-1 rounded-full border border-border">{kindLabel[w.kind]}</span>
                        <span className="numeral">{w.readingMinutes} min</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl mt-6 leading-tight tracking-tight group-hover:text-emerald transition-colors">
                        {w.title}
                      </h3>
                      <p className="font-bn text-sm text-emerald mt-1">{w.titleBn}</p>
                      <p className="mt-5 text-ink-soft leading-relaxed pretty">{w.excerpt}</p>
                    </article>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
