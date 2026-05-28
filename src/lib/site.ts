export const site = {
  name: "Ubaydullah Nayeem",
  nameBn: "উবায়দুল্লাহ নাঈম",
  honorific: "Hafiz · Qari",
  honorificBn: "হাফেজ · ক্বারী",
  role: "Porichalok · Baitul Quran wa Assunnah Madrasah",
  roleBn: "পরিচালক · বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসা",
  tagline:
    "Hafiz · Qari · Mu'allim — serving the Quran through hifz, qira'at, and the patient work of a residential madrasah in Dhaka.",
  taglineBn:
    "হাফেজ, ক্বারী, মুয়াল্লিম — হিফজ, ক্বিরাত, ও যাত্রাবাড়ীর এক আবাসিক মাদরাসার ধীর-স্থির খিদমতের মাধ্যমে কুরআনের সেবা।",
  url: "https://ubaydullahnayeem.com",
  email: "ubaydullahnayeem@gmail.com",
  phone: "+880 1601-400522",
  whatsapp: "+8801601400522",
  whatsappLink:
    "https://wa.me/8801601400522?text=As-salamu%20Alaikum%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20connect.",
  location: "Jatrabari, Dhaka, Bangladesh",
  locationBn: "যাত্রাবাড়ী, ঢাকা, বাংলাদেশ",
  socials: {
    facebook: "https://www.facebook.com/UbaydullahNayeem",
    youtube: "https://youtube.com/@ubaydullahnayeemofficial",
    youtubeChannelId: "UCBWbZmuJ1QTqqDtO2A-bDBw",
    youtubeHandle: "@ubaydullahnayeemofficial",
  },
  madrasah: {
    name: "Baitul Quran wa Assunnah Madrasah",
    nameBn: "বাইতুল কুরআন ওয়াস সুন্নাহ মাদরাসা",
    address: "340/A/2, South Jatrabari, Dhaka-1204, Bangladesh",
    addressBn: "৩৪০/এ/২, দক্ষিণ যাত্রাবাড়ী, ঢাকা-১২০৪, বাংলাদেশ",
    founded: 2021,
    site: "https://baitulquranwassunnahmadrasa.com/",
  },
  girlsMadrasah: {
    name: "Hifzul Quran Girls Madrasah",
    nameBn: "হিফজুল কুরআন গার্লস মাদরাসা",
    location: "Jatrabari, Dhaka",
  },
  navigation: [
    { label: "Home", href: "/", labelBn: "হোম" },
    { label: "About", href: "/about", labelBn: "পরিচয়" },
    { label: "Madrasah", href: "/madrasah", labelBn: "মাদরাসা" },
    { label: "Gallery", href: "/gallery", labelBn: "গ্যালারি" },
    { label: "Lectures", href: "/lectures", labelBn: "ওয়াজ" },
    { label: "Journal", href: "/blog", labelBn: "জার্নাল" },
    { label: "Contact", href: "/contact", labelBn: "যোগাযোগ" },
  ],
} as const;

export type SiteConfig = typeof site;
