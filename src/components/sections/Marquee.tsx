import { MarqueeStrip } from "@/components/effects/MarqueeStrip";

export function MarqueeBand() {
  return (
    <section className="bg-paper-2 py-8 border-y border-border">
      <MarqueeStrip
        direction="left"
        items={[
          "Tilawah",
          "Hifz",
          "Tajwid",
          "Tafsir",
          "Hadith",
          "Fiqh",
          "Adab",
          "Akhlaq",
          "Tarbiyyah",
          "Sabaq · Sabqi · Manzil",
        ]}
      />
    </section>
  );
}
