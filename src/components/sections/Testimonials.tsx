import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative section-pad overflow-hidden bg-paper-2">
      <GradientBlob tone="emerald" size="xl" opacity={0.06} className="-top-32 -left-32" />
      <GradientBlob tone="gold" size="lg" opacity={0.07} className="bottom-20 -right-32" />

      <div className="container-page">
        <ScrollReveal>
          <span className="kicker">Voices · The families we serve</span>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance max-w-3xl">
            What parents and mu&apos;allims <span className="italic-display gradient-text">have said</span>.
          </h2>
        </ScrollReveal>

        <StaggerReveal className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {testimonials.map((t, i) => (
            <StaggerItem key={t.name} className="break-inside-avoid mb-5">
              <figure
                className="rounded-card-lg border border-border bg-paper p-7 hover:shadow-card-hover transition-all duration-500"
                style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.5}deg)` }}
              >
                <div className="font-display text-5xl leading-none text-gold/40 select-none">&ldquo;</div>
                <blockquote className="mt-2 text-lg leading-relaxed text-ink-soft pretty">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-border/70">
                  <div className="font-display text-base tracking-tight">{t.name}</div>
                  <div className="text-xs text-ink-muted mt-0.5">{t.role}</div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
