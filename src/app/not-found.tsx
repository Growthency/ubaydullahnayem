import Link from "next/link";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ArabesqueBackdrop } from "@/components/effects/ArabesqueBackdrop";
import { MagneticButton } from "@/components/effects/MagneticButton";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <GradientBlob tone="emerald" size="hero" opacity={0.18} className="-top-40 -left-40" />
      <GradientBlob tone="gold" size="xl" opacity={0.14} className="-bottom-32 -right-32" />
      <ArabesqueBackdrop className="text-emerald" />

      <div className="container-page relative grid lg:grid-cols-12 gap-10 items-center text-center lg:text-left">
        <div className="lg:col-span-7">
          <span className="kicker mx-auto lg:mx-0">Not found</span>
          <h1 className="font-display text-7xl md:text-9xl mt-6 leading-[0.92] tracking-tight balance">
            We could not <span className="italic-display gradient-text">find the page</span>.
          </h1>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-xl mx-auto lg:mx-0">
            The link may have moved, or the page never existed. Either way —
            the rest of the site is here, and waiting.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <MagneticButton href="/" variant="primary">
              Return home
            </MagneticButton>
            <MagneticButton href="/blog" variant="ghost">
              Read the journal
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="font-display text-[10rem] md:text-[14rem] leading-none text-emerald/15 numeral">
            404
          </div>
          <p className="text-xs tracking-[0.2em] uppercase text-ink-muted">
            <Link href="/contact" className="link-sweep">
              Tell us what you were looking for →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
