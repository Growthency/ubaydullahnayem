import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";
import { writings } from "@/lib/data/writings";

const kindLabel: Record<(typeof writings)[number]["kind"], string> = {
  essay: "Essay",
  khutbah: "Khutbah",
  letter: "Letter",
  booklet: "Booklet",
};

export function WritingsPreview() {
  const featured = writings.slice(0, 4);
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <span className="kicker">Writings</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance max-w-2xl">
                Short, useful, <span className="italic-display gradient-text">written-on-the-side</span>.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <Link
              href="/writings"
              className="inline-flex items-center gap-2 text-emerald font-medium link-sweep"
            >
              All writings <ArrowUpRight size={18} />
            </Link>
          </ScrollReveal>
        </div>

        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((w) => (
            <StaggerItem key={w.slug}>
              <Link
                href={`/writings#${w.slug}`}
                className="group block h-full rounded-card-lg border border-border bg-paper-2 p-7 hover:bg-paper hover:border-emerald/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center justify-between text-xs tracking-[0.18em] uppercase text-ink-muted">
                  <span>{kindLabel[w.kind]}</span>
                  <span className="numeral">{w.year}</span>
                </div>
                <h3 className="font-display text-2xl mt-5 leading-tight tracking-tight group-hover:text-emerald transition-colors">
                  {w.title}
                </h3>
                <p className="font-bn text-sm text-emerald mt-1">{w.titleBn}</p>
                <p className="mt-4 text-sm text-ink-soft leading-relaxed line-clamp-4">{w.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs text-ink-muted">
                  {w.readingMinutes} min read · <ArrowUpRight size={12} />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
