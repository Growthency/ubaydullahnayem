import { cn } from "@/lib/utils";

/**
 * Lightweight markdown-ish renderer for blog content.
 * We support: # / ## / ### headings, paragraphs, blockquotes, *italic*,
 * **bold**, [text](url) links, and `inline code`. Lists are paragraph-grouped.
 *
 * For long-form richness without pulling MDX into the bundle.
 */
function renderInline(s: string) {
  // links
  let out = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-emerald link-sweep">$1</a>');
  // strong
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong class='font-semibold text-ink'>$1</strong>");
  // em
  out = out.replace(/\*([^*]+)\*/g, "<em class='italic'>$1</em>");
  // inline code
  out = out.replace(/`([^`]+)`/g, "<code class='font-mono text-[0.92em] px-1.5 py-0.5 rounded bg-paper-3 text-emerald-deep'>$1</code>");
  return out;
}

export function Prose({ content, className }: { content: string; className?: string }) {
  const blocks = content.trim().split(/\n{2,}/);

  return (
    <div className={cn("prose-custom flex flex-col gap-6 text-lg text-ink-soft leading-relaxed", className)}>
      {blocks.map((raw, i) => {
        const block = raw.trim();
        if (block.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="font-display text-2xl md:text-3xl mt-6 tracking-tight text-ink"
              dangerouslySetInnerHTML={{ __html: renderInline(block.slice(4)) }}
            />
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="font-display text-3xl md:text-4xl mt-10 tracking-tight text-ink"
              dangerouslySetInnerHTML={{ __html: renderInline(block.slice(3)) }}
            />
          );
        }
        if (block.startsWith("# ")) {
          return (
            <h1
              key={i}
              className="font-display text-4xl md:text-5xl mt-10 tracking-tight text-ink"
              dangerouslySetInnerHTML={{ __html: renderInline(block.slice(2)) }}
            />
          );
        }
        if (block.startsWith("> ")) {
          return (
            <blockquote
              key={i}
              className="border-l-4 border-gold pl-6 italic font-display text-2xl text-emerald-deep"
              dangerouslySetInnerHTML={{ __html: renderInline(block.slice(2)) }}
            />
          );
        }
        if (/^\s*[-*]\s+/.test(block)) {
          const items = block.split("\n").map((l) => l.replace(/^\s*[-*]\s+/, ""));
          return (
            <ul key={i} className="list-disc list-outside pl-6 space-y-2">
              {items.map((it, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(it) }} />
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="pretty"
            dangerouslySetInnerHTML={{ __html: renderInline(block) }}
          />
        );
      })}
    </div>
  );
}
