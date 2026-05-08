type Props = { className?: string };

export function ButaOrnament({ className }: Props) {
  return (
    <svg viewBox="0 0 60 80" className={className} fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden>
      <path d="M30 78 C 6 60, 6 30, 30 6 C 54 30, 54 60, 30 78 Z" />
      <path d="M30 70 C 14 56, 14 32, 30 14 C 46 32, 46 56, 30 70 Z" opacity="0.5" />
      <circle cx="30" cy="40" r="4" />
      <path d="M30 25 C 24 32, 24 48, 30 55" opacity="0.6" />
      <path d="M30 25 C 36 32, 36 48, 30 55" opacity="0.6" />
    </svg>
  );
}

export function Divider({ className = "" }: Props) {
  return (
    <div className={`flex items-center justify-center gap-6 text-bronze ${className}`}>
      <span className="h-px w-24 bg-current opacity-40" />
      <ButaOrnament className="h-8 w-6" />
      <span className="h-px w-24 bg-current opacity-40" />
    </div>
  );
}

export function CornerOrnament({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" stroke="currentColor" strokeWidth="0.6" aria-hidden>
      <path d="M0 60 Q 0 0, 60 0" />
      <path d="M0 80 Q 0 20, 80 20" opacity=".5" />
      <path d="M20 60 Q 20 20, 60 20" opacity=".7" />
      <circle cx="20" cy="20" r="2" />
    </svg>
  );
}
