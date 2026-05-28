export type Writing = {
  slug: string;
  title: string;
  titleBn?: string;
  kind: "essay" | "khutbah" | "letter" | "booklet";
  year: number;
  excerpt: string;
  readingMinutes: number;
};

export const writings: Writing[] = [
  {
    slug: "letter-to-a-young-hafiz",
    title: "Letter to a young hafiz",
    titleBn: "এক তরুণ হাফেজের প্রতি চিঠি",
    kind: "letter",
    year: 2024,
    excerpt:
      "You finished the thirtieth para last Ramadan. Your teacher cried. Your father held your face in his hands. Now the harder work begins — keeping it.",
    readingMinutes: 5,
  },
  {
    slug: "what-tajwid-actually-protects",
    title: "What tajwid actually protects",
    titleBn: "তাজবিদ আসলে কী রক্ষা করে",
    kind: "essay",
    year: 2024,
    excerpt:
      "Tajwid is not aesthetics. It is the boundary between the Word as it was revealed and the Word as we are tempted to make it. Mu'allims have to teach this difference early.",
    readingMinutes: 6,
  },
  {
    slug: "the-parent-classroom",
    title: "The parent classroom",
    titleBn: "অভিভাবকের ক্লাসরুম",
    kind: "essay",
    year: 2024,
    excerpt:
      "A child cannot succeed in a madrasah if the home is a different planet. Five concrete ways to align the two without turning the home into a school.",
    readingMinutes: 8,
  },
  {
    slug: "khutbah-on-adab-of-disagreement",
    title: "On the adab of disagreement",
    titleBn: "মতপার্থক্যের আদব",
    kind: "khutbah",
    year: 2023,
    excerpt:
      "A khutbah on how the salaf disagreed without rancor — and how our students must learn to do the same, in classrooms first, before they take it to the world.",
    readingMinutes: 9,
  },
  {
    slug: "small-cohorts-quiet-revolution",
    title: "Small cohorts, quiet revolution",
    titleBn: "ছোট দল, নীরব বিপ্লব",
    kind: "essay",
    year: 2023,
    excerpt:
      "The single most consequential decision any madrasah makes is the ratio of students to mu'allim. Everything else — method, syllabus, technology — is downstream.",
    readingMinutes: 7,
  },
  {
    slug: "booklet-akhlaq-tracker",
    title: "An adab tracker for mu'allims",
    titleBn: "মুয়াল্লিমের জন্য আদব ট্র্যাকার",
    kind: "booklet",
    year: 2023,
    excerpt:
      "A short, practical booklet — six pages — for teachers who want to track akhlaq the same way they track sabaq and sabqi. Print, fold, use this week.",
    readingMinutes: 4,
  },
];
