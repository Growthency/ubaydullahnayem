import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { bio } from "@/lib/data/bio";

export function AboutPreview() {
  return (
    <section id="about" className="relative section-pad overflow-hidden bg-paper-2">
      <GradientBlob tone="emerald" size="xl" opacity={0.07} className="top-20 -right-40" />
      <GradientBlob tone="gold" size="lg" opacity={0.08} className="bottom-10 -left-32" />

      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <span className="kicker">About · Porichoy</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance">
              Three decades in the <span className="italic-display gradient-text">company of the Quran</span> — and counting.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-8 text-lg text-ink-soft leading-relaxed pretty">{bio.shortIntro}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-emerald font-medium link-sweep"
            >
              The full story <ArrowUpRight size={18} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <StaggerReveal className="grid sm:grid-cols-2 gap-5">
            {bio.pillars.map((p) => (
              <StaggerItem key={p.title}>
                <div className="relative h-full rounded-card-lg bg-paper border border-border p-6 lg:p-7 transition-all hover:shadow-card-hover hover:-translate-y-1 duration-500">
                  <div className="absolute top-6 right-6 numeral text-3xl text-paper-3">
                    {String(bio.pillars.indexOf(p) + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl tracking-tight">{p.title}</h3>
                  <p className="font-bn text-sm text-emerald mt-1">{p.titleBn}</p>
                  <p className="mt-4 text-ink-soft leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
