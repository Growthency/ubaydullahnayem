import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { getAllPosts } from "@/lib/blog";
import { formatBnDate } from "@/lib/utils";

export async function BlogPreview() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;
  const sidePosts = rest.slice(0, 2);

  if (!featured) return null;

  return (
    <section className="relative section-pad overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <span className="kicker">Journal</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance max-w-2xl">
                Field notes from <span className="italic-display gradient-text">the work itself</span>.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-emerald font-medium link-sweep"
            >
              All entries <ArrowUpRight size={18} />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <ScrollReveal className="lg:col-span-7">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block h-full rounded-card-lg border border-border bg-paper-2 p-10 lg:p-12 hover:bg-paper hover:border-emerald/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-ink-muted">
                <span className="px-3 py-1 rounded-full border border-border bg-paper">
                  {featured.category}
                </span>
                <span>{formatBnDate(featured.published_at)}</span>
                <span>·</span>
                <span>{featured.reading_minutes} min read</span>
              </div>
              <h3 className="font-display text-4xl md:text-5xl mt-8 leading-[1.05] tracking-tight group-hover:text-emerald transition-colors balance">
                {featured.title}
              </h3>
              <p className="font-bn text-base text-emerald mt-2">{featured.title_bn}</p>
              <p className="mt-6 text-ink-soft leading-relaxed max-w-xl">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-emerald font-medium link-sweep">
                Read the entry <ArrowUpRight size={18} />
              </span>
            </Link>
          </ScrollReveal>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {sidePosts.map((p, idx) => (
              <ScrollReveal key={p.slug} delay={0.1 + idx * 0.08} className="h-full">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block h-full rounded-card-lg border border-border p-7 bg-paper hover:border-emerald/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-ink-muted">
                    <span>{p.category}</span>
                    <span>·</span>
                    <span>{p.reading_minutes} min</span>
                  </div>
                  <h3 className="font-display text-2xl mt-4 leading-tight tracking-tight group-hover:text-emerald transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed line-clamp-2">{p.excerpt}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
