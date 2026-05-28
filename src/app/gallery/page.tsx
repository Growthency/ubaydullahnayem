import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { fetchYouTubeVideos } from "@/lib/youtube";
import { galleryImages } from "@/lib/data/gallery";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "Gallery — photographs and YouTube lectures of Hafiz Qari Ubaydullah Nayeem.",
  path: "/gallery",
});

export const revalidate = 3600;

export default async function GalleryPage(
  props: PageProps<"/gallery">,
) {
  const sp = (await props.searchParams) as Record<string, string | string[] | undefined>;
  const tabParam = typeof sp.tab === "string" ? sp.tab : undefined;
  const pageParam = typeof sp.page === "string" ? sp.page : undefined;

  const videos = await fetchYouTubeVideos();
  const initialTab: "images" | "videos" =
    tabParam === "videos" ? "videos" : "images";
  const initialPage = Math.max(1, parseInt(pageParam || "1", 10) || 1);

  return (
    <GalleryClient
      videos={videos}
      images={galleryImages}
      initialTab={initialTab}
      initialPage={initialPage}
    />
  );
}
