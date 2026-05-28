"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ArabesqueBackdrop } from "@/components/effects/ArabesqueBackdrop";
import { TypeWriter } from "@/components/effects/TypeWriter";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { Parallax } from "@/components/effects/Parallax";
import { SectionDivider } from "@/components/effects/SectionDivider";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex items-center pt-10">
      {/* Background scaffolding */}
      <div className="absolute inset-0 -z-10 dot-grid opacity-50" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(15, 81, 50, 0.08), transparent 60%), radial-gradient(ellipse at bottom right, rgba(201, 162, 79, 0.10), transparent 50%)",
        }}
      />
      <GradientBlob tone="emerald" size="hero" opacity={0.18} className="-top-40 -left-40" />
      <GradientBlob tone="gold" size="xl" opacity={0.16} className="-bottom-32 -right-24" />
      <GradientBlob tone="sage" size="lg" opacity={0.10} className="top-40 right-20" />
      <ArabesqueBackdrop className="text-emerald" />

      <div className="relative container-page grid lg:grid-cols-12 gap-12 items-center py-20 lg:py-28">
        {/* Left */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="kicker"
          >
            <span className="shimmer-text">Mu&apos;allim · Porichalok · Khateeb</span>
          </motion.span>

          <h1 className="font-display text-[15vw] lg:text-[8.2rem] leading-[0.92] tracking-tight balance">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Ubaydullah
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="italic-display block gradient-text-animate"
              style={{ fontStyle: "italic" }}
            >
              Nayeem
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="font-bn text-2xl md:text-3xl text-ink-soft/85 tracking-tight"
          >
            উবায়দুল্লাহ নাঈম
            <span className="text-ink-muted mx-2">·</span>
            <span className="text-ink-muted">{site.honorific}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="text-xl md:text-2xl text-ink-soft leading-snug max-w-xl"
          >
            Teaching the next generation to
            {" "}
            <span className="text-emerald font-medium">
              <TypeWriter
                words={[
                  "read the Quran with adab.",
                  "carry deen into the world.",
                  "honor the chain of teachers.",
                  "answer Allah without shame.",
                ]}
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-ink-muted leading-relaxed max-w-lg pretty"
          >
            Porichalok of {site.madrasah.name} in Jatrabari, Dhaka. Trained in
            the classical Dars-e-Nizami chain, working at the meeting point of
            preserved tradition and disciplined modern pedagogy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <MagneticButton href="/madrasah" variant="primary">
              <BookOpen size={16} />
              Visit the Madrasah
            </MagneticButton>
            <MagneticButton href="/blog" variant="ghost">
              Read the Journal
              <ArrowRight size={16} />
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right — portrait frame */}
        <div className="lg:col-span-5 relative">
          <Parallax speed={40}>
            <motion.div
              initial={{ opacity: 0, y: 32, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto max-w-md aspect-[4/5] rounded-card-lg overflow-hidden shadow-card-hover ring-1 ring-border"
            >
              <Image
                src="/main.jpeg"
                alt="Ubaydullah Nayeem"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover object-center"
              />
              {/* Gradient wash for premium tone */}
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,20,16,0) 35%, rgba(10,20,16,0.55) 100%)",
                }}
              />
              {/* Frame caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-paper">
                <p className="font-display italic-display text-lg leading-snug">
                  &ldquo;A hafiz is not a tape recorder. The Quran is meant to
                  live in his manners.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.22em] uppercase opacity-80">
                  <span className="font-bn text-sm normal-case tracking-normal">
                    {site.madrasah.nameBn}
                  </span>
                  <span>Jatrabari · Dhaka</span>
                </div>
              </div>
            </motion.div>
          </Parallax>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -top-6 -left-6 lg:-left-12 w-32 h-32 rounded-full grid place-items-center bg-gradient-to-br from-emerald to-emerald-bright text-paper rotate-[-12deg] shadow-card-hover"
            aria-hidden
          >
            <span className="font-display text-center text-sm leading-tight px-3">
              Quran <br />
              first
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="absolute bottom-2 right-4 lg:-right-4 w-24 h-24 rounded-full grid place-items-center bg-gradient-to-br from-gold to-gold-bright text-ink rotate-[8deg] shadow-card-hover"
            aria-hidden
          >
            <span className="font-display text-center text-xs leading-tight px-2">
              Adab <br />
              tracked
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted text-[10px] tracking-[0.3em] uppercase"
      >
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-ink-muted to-transparent" />
      </motion.div>

      <SectionDivider variant="leaf" fill="var(--paper-2)" className="absolute -bottom-px left-0 right-0" />
    </section>
  );
}
