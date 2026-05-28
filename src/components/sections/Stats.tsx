import { CountUp } from "@/components/effects/CountUp";
import { GradientBlob } from "@/components/effects/GradientBlob";
import { L } from "@/components/shared/L";

export function Stats() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-paper-2">
      <GradientBlob tone="gold" size="lg" opacity={0.07} className="top-10 -left-32" />
      <div className="container-page">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 text-center">
          <Stat
            n={12}
            suffix=" : 1"
            labelEn="Hifz cap · students per mu'allim"
            labelBn="হিফজের অনুপাত · প্রতি মুয়াল্লিমে ছাত্র"
          />
          <Stat
            n={4}
            suffix=" yrs"
            suffixBn=" বছর"
            labelEn="Since the madrasah opened"
            labelBn="মাদরাসা প্রতিষ্ঠার পর"
          />
          <Stat
            n={30}
            suffix=" ajza'"
            suffixBn=" পারা"
            labelEn="Memorized cohort by cohort"
            labelBn="ব্যাচে ব্যাচে মুখস্থ"
          />
          <Stat
            n={4}
            suffix=""
            labelEn="Weekly cycles · sabaq sabqi manzil adab"
            labelBn="সাপ্তাহিক চক্র · সবক, সবকি, মঞ্জিল, আদব"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({
  n,
  suffix,
  suffixBn,
  labelEn,
  labelBn,
}: {
  n: number;
  suffix: string;
  suffixBn?: string;
  labelEn: string;
  labelBn: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="numeral text-5xl md:text-6xl font-display text-emerald-deep tracking-tight">
        <span data-lang="en">
          <CountUp to={n} suffix={suffix} />
        </span>
        <span data-lang="bn" className="font-bn">
          <CountUp to={n} suffix={suffixBn ?? suffix} />
        </span>
      </div>
      <div className="mt-3 text-[0.78rem] tracking-[0.18em] uppercase text-ink-muted max-w-[16ch] mx-auto">
        <L en={labelEn} bn={labelBn} />
      </div>
    </div>
  );
}
