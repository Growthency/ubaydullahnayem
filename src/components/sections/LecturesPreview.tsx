import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { lectures } from "@/lib/data/lectures";

export function LecturesPreview() {
  const featured = lectures.slice(0, 3);

  return (
    <section className="relative section-pad overflow-hidden bg-paper-2">
      <GradientBlob tone="emerald" size="xl" opacity={0.06} className="bottom-20 -right-40" />
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <span className="kicker">Lectures · Dars · Khutbah</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance max-w-2xl">
                Slow lessons, in <span className="italic-display gradient-text">unhurried company</span>.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <Link
              href="/lectures"
              className="inline-flex items-center gap-2 text-emerald font-medium link-sweep"
            >
              All lectures <ArrowUpRight size={18} />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerReveal className="grid md:grid-cols-3 gap-5">
          {featured.map((l, i) => (
            <StaggerItem key={l.slug}>
              <Link
                href={`/lectures#${l.slug}`}
                className={`group block h-full rounded-card-lg p-8 border transition-all duration-500 hover:-translate-y-1 ${
                  i === 1
                    ? "bg-emerald text-paper border-emerald hover:shadow-[0_30px_60px_-20px_rgba(15,81,50,0.5)]"
                    : "bg-paper border-border hover:border-emerald/40 hover:shadow-card-hover"
                }`}
              >
                <div className="flex items-center justify-between text-xs tracking-[0.18em] uppercase opacity-70">
                  <span>{l.category}</span>
                  <span className="numeral">{l.duration}</span>
                </div>
                <h3
                  className={`font-display text-2xl mt-6 leading-tight tracking-tight ${
                    i === 1 ? "" : "group-hover:text-emerald"
                  } transition-colors`}
                >
                  {l.title}
                </h3>
                <p className={`font-bn text-sm mt-1 ${i === 1 ? "text-gold-bright" : "text-emerald"}`}>
                  {l.titleBn}
                </p>
                <p className="mt-4 text-sm leading-relaxed opacity-80 line-clamp-3">{l.context}</p>
                <span
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${
                    i === 1 ? "text-gold-bright" : "text-emerald"
                  }`}
                >
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-current/10">
                    <Play size={12} fill="currentColor" />
                  </span>
                  Listen
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
