import Link from "next/link";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";
import { fetchYouTubeVideos } from "@/lib/youtube";
import { site } from "@/lib/site";
import { ScrollReveal, StaggerReveal, StaggerItem } from "@/components/effects/ScrollReveal";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { L } from "@/components/shared/L";

export async function LecturesPreview() {
  const videos = await fetchYouTubeVideos();
  const top = videos.filter((v) => !v.isShort).slice(0, 3);
  if (top.length === 0) return null;

  return (
    <section className="relative section-pad overflow-hidden bg-paper-2">
      <GradientBlob tone="emerald" size="xl" opacity={0.06} className="bottom-20 -right-40" />
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <span className="kicker">
                <L en="Lectures · Tilawah" bn="ওয়াজ · তিলাওয়াত" />
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="font-display text-5xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance max-w-2xl">
                <L
                  en={<>Slow lessons, in <span className="italic-display gradient-text">unhurried company</span>.</>}
                  bn={<>ধৈর্যশীল পাঠ — <span className="italic-display gradient-text">নীরব সঙ্গে</span>।</>}
                />
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-4">
              <Link
                href="/lectures"
                className="inline-flex items-center gap-2 text-emerald font-medium link-sweep"
              >
                <L en="All lectures" bn="সব ওয়াজ" /> <ArrowUpRight size={18} />
              </Link>
              <a
                href={site.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink-muted hover:text-emerald transition-colors link-sweep"
              >
                <L en="YouTube" bn="ইউটিউব" /> <ExternalLink size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <StaggerReveal className="grid md:grid-cols-3 gap-5">
          {top.map((v, i) => (
            <StaggerItem key={v.id}>
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block h-full rounded-card-lg overflow-hidden border transition-all duration-500 hover:-translate-y-1 ${
                  i === 1
                    ? "bg-emerald text-paper border-emerald hover:shadow-[0_30px_60px_-20px_rgba(15,81,50,0.5)]"
                    : "bg-paper border-border hover:border-emerald/40 hover:shadow-card-hover"
                }`}
              >
                <div className="relative aspect-video bg-paper-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={v.thumbnail}
                    alt={v.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="grid place-items-center w-12 h-12 rounded-full bg-gold-bright/95 text-emerald-deep shadow-card group-hover:scale-110 transition-transform">
                      <Play size={16} fill="currentColor" />
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <h3
                    className={`font-display text-lg leading-snug tracking-tight transition-colors line-clamp-3 ${
                      i === 1 ? "" : "group-hover:text-emerald"
                    }`}
                  >
                    {v.title}
                  </h3>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
