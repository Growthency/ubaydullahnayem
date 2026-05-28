import type { Metadata } from "next";
import { Play } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { lectures, type Lecture } from "@/lib/data/lectures";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Lectures",
  description: "Tafsir, dars, khutbah, and parent Q&A — recorded over the years and offered without ceremony.",
  path: "/lectures",
});

export default function LecturesPage() {
  const grouped = lectures.reduce<Record<Lecture["category"], Lecture[]>>(
    (acc, l) => {
      (acc[l.category] ||= []).push(l);
      return acc;
    },
    {} as Record<Lecture["category"], Lecture[]>,
  );

  const categories: Lecture["category"][] = ["Tafsir", "Dars", "Khutbah", "Q&A", "Family"];

  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <GradientBlob tone="emerald" size="xl" opacity={0.12} className="-top-32 -left-32" />
        <GradientBlob tone="gold" size="lg" opacity={0.10} className="-bottom-20 -right-20" />

        <div className="container-page grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="kicker">Lectures · ওয়াজ</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.96] tracking-tight balance">
                Sit with us, <span className="italic-display gradient-text">unhurried</span>.
              </h1>
            </ScrollReveal>
          </div>
          <ScrollReveal className="lg:col-span-5" delay={0.15}>
            <p className="text-lg text-ink-soft leading-relaxed pretty">
              These are not edited reels. They are full sessions, given in the
              same room, with students, on ordinary weekdays. The length is the
              point. The slowness is the point.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category chips */}
      <section className="border-y border-border bg-paper-2">
        <div className="container-page py-6 flex flex-wrap items-center gap-3 text-sm">
          {categories.map((c) => (
            <a
              key={c}
              href={`#${c.toLowerCase().replace(/\W+/g, "-")}`}
              className="px-4 py-1.5 rounded-full border border-border bg-paper hover:bg-emerald hover:text-paper hover:border-emerald transition-colors"
            >
              {c} · {grouped[c]?.length ?? 0}
            </a>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad">
        <div className="container-page flex flex-col gap-20">
          {categories.map((cat) => {
            const items = grouped[cat] ?? [];
            if (!items.length) return null;
            return (
              <div key={cat} id={cat.toLowerCase().replace(/\W+/g, "-")}>
                <ScrollReveal>
                  <div className="flex items-end justify-between mb-8">
                    <h2 className="font-display text-4xl md:text-5xl tracking-tight">{cat}</h2>
                    <span className="text-xs tracking-[0.2em] uppercase text-ink-muted">
                      {items.length} {items.length === 1 ? "session" : "sessions"}
                    </span>
                  </div>
                </ScrollReveal>

                <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((l) => (
                    <StaggerItem key={l.slug}>
                      <article
                        id={l.slug}
                        className="group h-full rounded-card-lg bg-paper-2 border border-border p-8 hover:bg-paper hover:border-emerald/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                      >
                        <div className="flex items-center justify-between">
                          <span className="grid place-items-center w-11 h-11 rounded-full bg-emerald text-paper">
                            <Play size={14} fill="currentColor" />
                          </span>
                          <span className="text-xs tracking-[0.18em] uppercase text-ink-muted numeral">
                            {l.duration}
                          </span>
                        </div>
                        <h3 className="font-display text-xl md:text-2xl mt-5 leading-tight tracking-tight group-hover:text-emerald transition-colors">
                          {l.title}
                        </h3>
                        <p className="font-bn text-sm text-emerald mt-1">{l.titleBn}</p>
                        <p className="mt-4 text-sm text-ink-soft leading-relaxed pretty">{l.context}</p>
                      </article>
                    </StaggerItem>
                  ))}
                </StaggerReveal>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
