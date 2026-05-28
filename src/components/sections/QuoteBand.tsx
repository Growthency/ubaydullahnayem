"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ArabesqueBackdrop } from "@/components/effects/ArabesqueBackdrop";
import { bio } from "@/lib/data/bio";

export function QuoteBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.2, 1, 1, 0.2]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 overflow-hidden bg-midnight text-paper"
    >
      <GradientBlob tone="emerald" size="hero" opacity={0.25} className="-top-40 -left-40" />
      <GradientBlob tone="gold" size="xl" opacity={0.18} className="-bottom-40 -right-40" />
      <ArabesqueBackdrop className="text-gold-bright opacity-[0.12]" />

      <div className="relative container-page grid lg:grid-cols-12 gap-12 items-center">
        <motion.div style={{ y: y1 }} className="lg:col-span-2 hidden lg:block">
          <div className="font-display text-[15rem] text-gold/30 leading-none">&ldquo;</div>
        </motion.div>

        <motion.div style={{ opacity }} className="lg:col-span-8 text-center">
          <p className="font-display text-3xl md:text-5xl leading-[1.18] tracking-tight balance">
            {bio.quote.en}
          </p>
          <p className="font-bn text-xl md:text-2xl mt-8 text-paper/60 leading-snug">
            {bio.quote.bn}
          </p>
          <p className="mt-10 text-xs tracking-[0.3em] uppercase text-gold-bright/80">
            — Ubaydullah Nayeem
          </p>
        </motion.div>

        <motion.div style={{ y: y2 }} className="lg:col-span-2 hidden lg:block">
          <div className="font-display text-[15rem] text-gold/30 leading-none text-right">&rdquo;</div>
        </motion.div>
      </div>
    </section>
  );
}
