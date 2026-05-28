import { CountUp } from "@/components/effects/CountUp";
import { GradientBlob } from "@/components/effects/GradientBlob";

export function Stats() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-paper-2">
      <GradientBlob tone="gold" size="lg" opacity={0.07} className="top-10 -left-32" />
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center">
          <Stat n={12} suffix=" : 1" label="Hifz cap · students per mu'allim" />
          <Stat n={4} suffix=" yrs" label="Since the madrasah opened" />
          <Stat n={30} suffix=" ajza'" label="Memorized cohort by cohort" />
          <Stat n={4} suffix="" label="Weekly cycles · sabaq sabqi manzil adab" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, suffix, label }: { n: number; suffix: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="numeral text-5xl md:text-6xl font-display text-emerald-deep tracking-tight">
        <CountUp to={n} suffix={suffix} />
      </div>
      <div className="mt-3 text-[0.78rem] tracking-[0.18em] uppercase text-ink-muted max-w-[16ch] mx-auto">
        {label}
      </div>
    </div>
  );
}
