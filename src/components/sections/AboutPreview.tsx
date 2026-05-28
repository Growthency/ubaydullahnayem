import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { bio } from "@/lib/data/bio";
import { L } from "@/components/shared/L";

export function AboutPreview() {
  return (
    <section id="about" className="relative section-pad overflow-hidden bg-paper-2">
      <GradientBlob tone="emerald" size="xl" opacity={0.07} className="top-20 -right-40" />
      <GradientBlob tone="gold" size="lg" opacity={0.08} className="bottom-10 -left-32" />

      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <span className="kicker">
              <L en="About · Porichoy" bn="পরিচয় · About" />
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance">
              <L
                en={<>Serving the Quran — <span className="italic-display gradient-text">slowly, sincerely, daily</span>.</>}
                bn={<>কুরআনের খিদমত — <span className="italic-display gradient-text">ধীরে, একনিষ্ঠভাবে, প্রতিদিন</span>।</>}
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-8 text-lg text-ink-soft leading-relaxed pretty">
              <L en={bio.shortIntro} bn={bio.shortIntroBn} />
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-emerald font-medium link-sweep"
            >
              <L en="The full story" bn="পূর্ণ পরিচয়" /> <ArrowUpRight size={18} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7">
          <StaggerReveal className="grid sm:grid-cols-2 gap-5">
            {bio.pillars.map((p, i) => (
              <StaggerItem key={i}>
                <div className="relative h-full rounded-card-lg bg-paper border border-border p-6 lg:p-7 transition-all hover:shadow-card-hover hover:-translate-y-1 duration-500">
                  <div className="absolute top-6 right-6 numeral text-3xl text-paper-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl tracking-tight">
                    <L en={p.title} bn={p.titleBn} />
                  </h3>
                  <p className="mt-4 text-ink-soft leading-relaxed">
                    <L en={p.body} bn={p.bodyBn} />
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
