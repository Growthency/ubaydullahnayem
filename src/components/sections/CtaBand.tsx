"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { ArabesqueBackdrop } from "@/components/effects/ArabesqueBackdrop";
import { MagneticButton } from "@/components/effects/MagneticButton";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-card-lg overflow-hidden p-10 md:p-20 bg-gradient-to-br from-emerald-deep via-emerald to-emerald-bright text-paper"
        >
          <GradientBlob tone="gold" size="xl" opacity={0.3} className="-top-32 -right-32" />
          <GradientBlob tone="emerald" size="lg" opacity={0.3} className="-bottom-32 -left-20" />
          <ArabesqueBackdrop className="text-gold-bright opacity-[0.15]" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="kicker text-gold-bright">Salam · Begin a conversation</span>
              <h2 className="font-display text-4xl md:text-6xl mt-6 leading-[1.02] tracking-tight balance">
                For your son, your daughter, your family — <span className="italic-display text-gold-bright">come visit.</span>
              </h2>
              <p className="mt-6 max-w-xl text-paper/85 leading-relaxed">
                Bring your child during weekday hours. Sit in on a class. Meet
                a mu&apos;allim. The best decisions get made after the visit,
                not before.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
              <MagneticButton
                href={site.whatsappLink}
                variant="gold"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                Message on WhatsApp
              </MagneticButton>
              <MagneticButton
                href="/contact"
                variant="ghost"
                className="text-paper border-paper/30 hover:border-paper"
              >
                Other ways to reach us
                <ArrowRight size={16} />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
