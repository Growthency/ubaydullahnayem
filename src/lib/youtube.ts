import "server-only";
import { site } from "@/lib/site";

export type YouTubeVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  thumbnailHQ: string;
  publishedAt: string;
  views: number;
  isShort: boolean;
};

const RSS_URL = (channelId: string) =>
  `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

/**
 * Fetch the latest videos from a YouTube channel's public RSS feed.
 * No API key required, no auth — but limited to the latest ~15 entries.
 *
 * Cached with revalidate: 1h (Next.js fetch cache).
 */
export async function fetchYouTubeVideos(): Promise<YouTubeVideo[]> {
  const channelId = site.socials.youtubeChannelId;
  if (!channelId) return [];

  try {
    const res = await fetch(RSS_URL(channelId), {
      next: { revalidate: 3600 },
      headers: {
        "user-agent":
          "Mozilla/5.0 (compatible; ubaydullahnayeem-site/1.0)",
      },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseYouTubeRSS(xml);
  } catch {
    return [];
  }
}

function parseYouTubeRSS(xml: string): YouTubeVideo[] {
  // Lightweight RSS parser tailored to YouTube's media:* + yt:* feed.
  // We intentionally avoid pulling in a full XML parser dependency.
  const videos: YouTubeVideo[] = [];

  const entryRe = /<entry>([\s\S]*?)<\/entry>/g;
  let match: RegExpExecArray | null;
  while ((match = entryRe.exec(xml))) {
    const entry = match[1];
    const id = pick(entry, /<yt:videoId>([^<]+)<\/yt:videoId>/);
    const title = pick(entry, /<title>([\s\S]*?)<\/title>/);
    const link = pick(entry, /<link\s+rel="alternate"\s+href="([^"]+)"/);
    const published = pick(entry, /<published>([^<]+)<\/published>/);
    const thumb = pick(entry, /<media:thumbnail\s+url="([^"]+)"/);
    const views = parseInt(
      pick(entry, /<media:statistics\s+views="(\d+)"/) || "0",
      10,
    );
    if (!id || !link) continue;

    const isShort = link.includes("/shorts/");
    videos.push({
      id,
      title: decodeXmlEntities(title || ""),
      url: link,
      thumbnail:
        thumb || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      thumbnailHQ: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
      publishedAt: published || "",
      views: Number.isFinite(views) ? views : 0,
      isShort,
    });
  }

  return videos;
}

function pick(haystack: string, re: RegExp): string {
  const m = haystack.match(re);
  return m ? m[1] : "";
}

function decodeXmlEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}
