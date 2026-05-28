export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex flex-col items-center gap-6">
        <svg width="64" height="64" viewBox="0 0 64 64" className="animate-spin-slow">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="64" y2="64">
              <stop offset="0%" stopColor="#0F5132" />
              <stop offset="100%" stopColor="#C9A24F" />
            </linearGradient>
          </defs>
          <path
            d="M32 4 L40 16 L54 12 L52 26 L60 32 L52 38 L54 52 L40 48 L32 60 L24 48 L10 52 L12 38 L4 32 L12 26 L10 12 L24 16 Z"
            fill="none"
            stroke="url(#lg)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-xs tracking-[0.2em] uppercase text-ink-muted">Loading</span>
      </div>
      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
      `}</style>
    </div>
  );
}
