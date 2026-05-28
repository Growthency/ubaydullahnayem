import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { fallbackPosts } from "@/lib/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;
  const now = new Date();
  const staticRoutes = ["", "/about", "/madrasah", "/writings", "/lectures", "/blog", "/contact"];

  const pages: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));

  const blog: MetadataRoute.Sitemap = fallbackPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.published_at),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...pages, ...blog];
}
