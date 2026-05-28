import { cn } from "@/lib/utils";

type Variant = "wave" | "curve" | "diagonal" | "arch" | "leaf";

const paths: Record<Variant, string> = {
  wave:
    "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z",
  curve:
    "M0,60 Q720,-20 1440,60 L1440,80 L0,80 Z",
  diagonal:
    "M0,80 L1440,0 L1440,80 L0,80 Z",
  arch:
    "M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z",
  leaf:
    "M0,80 C300,30 600,80 720,40 C840,0 1140,60 1440,30 L1440,80 L0,80 Z",
};

export function SectionDivider({
  variant = "wave",
  flip = false,
  fill = "var(--paper)",
  className,
}: {
  variant?: Variant;
  flip?: boolean;
  fill?: string;
  className?: string;
}) {
  return (
    <svg
      className={cn("divider-wave", flip && "rotate-180", className)}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d={paths[variant]} fill={fill} />
    </svg>
  );
}
