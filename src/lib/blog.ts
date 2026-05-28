import "server-only";
import { getSupabaseAnon, hasSupabaseConfig } from "./supabase/server";
import { fallbackPosts, type BlogPost } from "./data/posts";

export type { BlogPost } from "./data/posts";

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!hasSupabaseConfig()) return fallbackPosts;

  try {
    const supabase = getSupabaseAnon();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error || !data || data.length === 0) return fallbackPosts;
    return data as BlogPost[];
  } catch {
    return fallbackPosts;
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!hasSupabaseConfig()) {
    return fallbackPosts.find((p) => p.slug === slug) ?? null;
  }

  try {
    const supabase = getSupabaseAnon();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error || !data) {
      return fallbackPosts.find((p) => p.slug === slug) ?? null;
    }
    return data as BlogPost;
  } catch {
    return fallbackPosts.find((p) => p.slug === slug) ?? null;
  }
}

export async function getRelatedPosts(slug: string, limit = 3): Promise<BlogPost[]> {
  const all = await getAllPosts();
  return all.filter((p) => p.slug !== slug).slice(0, limit);
}
