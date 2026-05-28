import { cn } from "@/lib/utils";

export function ArabesqueBackdrop({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={cn("absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none", className)}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="arabesque" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M20 0 L40 20 L20 40 L0 20 Z M20 12 L28 20 L20 28 L12 20 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
          <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#arabesque)" />
    </svg>
  );
}
