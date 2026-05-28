export const site = {
  name: "Ubaydullah Nayeem",
  nameBn: "উবায়দুল্লাহ নাঈম",
  honorific: "Hafizahullah",
  role: "Porichalok · Baitul Quran wa Assunnah Madrasah",
  roleBn: "পরিচালক · বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসা",
  tagline:
    "Classical Quranic sciences. Modern pedagogy. A generation rooted in deen and ready for the world it will lead.",
  taglineBn:
    "শাস্ত্রীয় কুরআনিক শিক্ষা ও আধুনিক পদ্ধতির সমন্বয়ে দ্বীনে গভীর ও সমকালীন দায়িত্বে প্রস্তুত প্রজন্ম গড়ে তোলা।",
  url: "https://ubaydullahnayeem.com",
  email: "salam@ubaydullahnayeem.com",
  phone: "+880 1601-400522",
  whatsapp: "+8801601400522",
  whatsappLink:
    "https://wa.me/8801601400522?text=Assalamu%20Alaikum%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20connect.",
  location: "Jatrabari, Dhaka, Bangladesh",
  socials: {
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
  },
  madrasah: {
    name: "Baitul Quran wa Assunnah Madrasah",
    nameBn: "বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসা",
    address: "Bijbi Market Jame Mosque · Jatrabari · Dhaka-1204 · Bangladesh",
    founded: 2021,
    site: "https://baitulquranwassunnahmadrasa.com/",
  },
  navigation: [
    { label: "About", href: "/about", labelBn: "পরিচয়" },
    { label: "Madrasah", href: "/madrasah", labelBn: "মাদরাসা" },
    { label: "Writings", href: "/writings", labelBn: "রচনা" },
    { label: "Lectures", href: "/lectures", labelBn: "ওয়াজ" },
    { label: "Journal", href: "/blog", labelBn: "জার্নাল" },
    { label: "Contact", href: "/contact", labelBn: "যোগাযোগ" },
  ],
} as const;

export type SiteConfig = typeof site;
