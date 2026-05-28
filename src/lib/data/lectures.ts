export type Lecture = {
  slug: string;
  title: string;
  titleBn: string;
  category: "Tafsir" | "Dars" | "Khutbah" | "Q&A" | "Family";
  duration: string;
  context: string;
};

export const lectures: Lecture[] = [
  {
    slug: "tafsir-surah-asr-modern-time",
    title: "Tafsir Surat al-Asr — a meditation on modern time",
    titleBn: "সূরা আল-আসর — আধুনিক সময়ের পাঠ",
    category: "Tafsir",
    duration: "38 min",
    context:
      "A weekday dars on the three short ayat of Surat al-Asr and what they say to a generation that mistakes activity for productivity.",
  },
  {
    slug: "dars-bukhari-niyyah",
    title: "Bukhari · the first hadith — innama'l a'malu bin-niyyat",
    titleBn: "বুখারীর প্রথম হাদীস — ইন্নামাল আ'মালু বিন-নিয়্যাত",
    category: "Dars",
    duration: "52 min",
    context:
      "Opening session of a multi-week Bukhari series — what it means that the imam chose this hadith first, and how scholars across centuries have read it.",
  },
  {
    slug: "khutbah-on-time-of-students",
    title: "Khutbah · the time of students",
    titleBn: "খুতবা · ছাত্রদের সময়",
    category: "Khutbah",
    duration: "21 min",
    context:
      "A Jumu'ah khutbah delivered at the masjid attached to the madrasah — addressed to families with school-age children.",
  },
  {
    slug: "qa-when-the-child-resists-hifz",
    title: "Q&A · when the child resists hifz",
    titleBn: "প্রশ্নোত্তর · সন্তান যখন হিফয-এ অনাগ্রহী",
    category: "Q&A",
    duration: "26 min",
    context:
      "A long parent Q&A on the most common crisis in any hifz program — what to do when a previously enthusiastic student goes flat.",
  },
  {
    slug: "family-rhythm-of-quran-home",
    title: "The rhythm of a Quran-shaped home",
    titleBn: "কুরআন-কেন্দ্রিক ঘরের ছন্দ",
    category: "Family",
    duration: "44 min",
    context:
      "An evening session for families — concrete daily and weekly anchors that turn the home into a quiet partner of the madrasah.",
  },
  {
    slug: "tafsir-surah-rahman-mercy-orchard",
    title: "Tafsir Surat ar-Rahman — the orchard of mercy",
    titleBn: "সূরা আর-রহমান — রহমতের বাগান",
    category: "Tafsir",
    duration: "1 hr 12 min",
    context:
      "A long tafsir session on the cadence of fa-bi ayyi ala'i Rabbikuma tukadhdhiban — and why classical scholars called it the bride of the Quran.",
  },
  {
    slug: "khutbah-on-anger-of-the-mu-min",
    title: "Khutbah · the anger of a believer",
    titleBn: "খুতবা · মুমিনের রাগ",
    category: "Khutbah",
    duration: "19 min",
    context:
      "A khutbah on hilm — the prophetic discipline of restraint — and what its absence does to families, classrooms, and online discourse.",
  },
  {
    slug: "qa-on-screens-and-sons",
    title: "Q&A · screens, sons, and the home",
    titleBn: "প্রশ্নোত্তর · স্ক্রিন, ছেলেসন্তান, এবং ঘর",
    category: "Q&A",
    duration: "33 min",
    context:
      "Practical guidance for fathers and mothers navigating the screen question — without panic, without surrender, and without slogans.",
  },
];
