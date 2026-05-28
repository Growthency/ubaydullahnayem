import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { bio } from "@/lib/data/bio";
import { site } from "@/lib/site";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ArabesqueBackdrop } from "@/components/effects/ArabesqueBackdrop";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { Parallax } from "@/components/effects/Parallax";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: bio.shortIntro,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-pad overflow-hidden">
        <GradientBlob tone="emerald" size="xl" opacity={0.14} className="-top-40 -left-32" />
        <GradientBlob tone="gold" size="lg" opacity={0.12} className="top-40 -right-32" />
        <ArabesqueBackdrop className="text-emerald" />

        <div className="container-page grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <span className="kicker">Porichoy · About</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="font-display text-6xl md:text-8xl mt-6 leading-[0.96] tracking-tight balance">
                A life arranged <span className="italic-display gradient-text">around the Quran</span>.
              </h1>
            </ScrollReveal>
          </div>

          <ScrollReveal className="lg:col-span-5" delay={0.15}>
            <p className="text-lg text-ink-soft leading-relaxed pretty">
              The work is small, slow, and uncelebrated. It is also, in the end,
              the only thing I have ever wanted to do.
            </p>
            <p className="font-bn text-base text-ink-muted mt-4 leading-relaxed">
              কাজটা ছোট, ধীর, এবং নিরব। তবু — এটাই একমাত্র কাজ, যেটা করতে আমি জীবনভর চেয়ে এসেছি।
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Long bio */}
      <section className="relative section-pad bg-paper-2 overflow-hidden">
        <GradientBlob tone="emerald" size="lg" opacity={0.05} className="top-40 -right-32" />
        <div className="container-page grid lg:grid-cols-12 gap-12">
          <ScrollReveal className="lg:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight balance">
              The short version, told properly.
            </h2>
            <p className="mt-4 text-sm tracking-[0.18em] uppercase text-ink-muted">
              Porichalok · Mu&apos;allim · Khateeb
            </p>
          </ScrollReveal>
          <div className="lg:col-span-8 flex flex-col gap-6">
            {bio.longIntro.map((para, i) => (
              <ScrollReveal key={i} delay={0.05 + i * 0.06}>
                <p className="text-lg text-ink-soft leading-relaxed pretty">{para}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad relative overflow-hidden">
        <div className="container-page">
          <ScrollReveal>
            <span className="kicker">Journey</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance max-w-3xl">
              A long apprenticeship — <span className="italic-display gradient-text">the only kind that produces a mu&apos;allim</span>.
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-px bg-border rounded-card-lg overflow-hidden border border-border">
            {bio.timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={0.05 + i * 0.05}>
                <div className="grid md:grid-cols-12 gap-6 p-8 md:p-10 bg-paper hover:bg-paper-2 transition-colors">
                  <div className="md:col-span-3">
                    <span className="numeral text-xs tracking-[0.2em] uppercase text-emerald">
                      {item.year}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-ink-soft leading-relaxed pretty max-w-2xl">
                      {item.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — 2x2 */}
      <section className="section-pad bg-paper-2 relative overflow-hidden">
        <GradientBlob tone="gold" size="xl" opacity={0.06} className="-top-32 -left-32" />
        <div className="container-page">
          <ScrollReveal>
            <span className="kicker">Philosophy</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance max-w-3xl">
              Four things I believe — and live by.
            </h2>
          </ScrollReveal>

          <StaggerReveal className="mt-16 grid md:grid-cols-2 gap-5">
            {bio.philosophy.map((p, i) => (
              <StaggerItem key={p.heading}>
                <div className="relative h-full rounded-card-lg bg-paper border border-border p-8 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500">
                  <span className="numeral text-xs tracking-[0.2em] uppercase text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl mt-3 tracking-tight">
                    {p.heading}
                  </h3>
                  <p className="mt-4 text-ink-soft leading-relaxed pretty">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Big quote with parallax */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-midnight text-paper">
        <GradientBlob tone="emerald" size="hero" opacity={0.25} className="-top-40 -left-40" />
        <GradientBlob tone="gold" size="xl" opacity={0.2} className="-bottom-40 -right-40" />
        <ArabesqueBackdrop className="text-gold-bright opacity-[0.10]" />

        <Parallax speed={30} className="container-page text-center">
          <p className="font-display text-3xl md:text-5xl leading-[1.18] tracking-tight balance max-w-4xl mx-auto">
            {bio.quote.en}
          </p>
          <p className="font-bn text-xl md:text-2xl mt-8 text-paper/60 leading-snug">
            {bio.quote.bn}
          </p>
        </Parallax>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-page flex flex-col md:flex-row items-start md:items-center justify-between gap-8 rounded-card-lg border border-border p-10 md:p-12 bg-paper-2">
          <div>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight">
              Want to talk about your child&apos;s tarbiyyah?
            </h3>
            <p className="mt-2 text-ink-muted">Send a salam. The first conversation is a meeting, not a sales call.</p>
          </div>
          <MagneticButton href={site.whatsappLink} variant="primary" target="_blank" rel="noopener noreferrer">
            Message on WhatsApp
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
