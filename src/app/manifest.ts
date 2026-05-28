import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ubaydullah Nayeem",
    short_name: "Ubaydullah",
    description:
      "Personal site of Ubaydullah Nayeem — Mu'allim and Porichalok of Baitul Quran wa Assunnah Madrasah.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6EE",
    theme_color: "#0F5132",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
