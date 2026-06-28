export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`aurora-wrap pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-1/4 -left-1/4 h-[60vh] w-[60vh] rounded-full bg-primary/30 blur-[120px] animate-aurora-shift" />
      <div className="absolute top-1/3 -right-1/4 h-[55vh] w-[55vh] rounded-full bg-secondary/30 blur-[120px] animate-aurora-shift [animation-delay:-6s]" />
      <div className="absolute -bottom-1/4 left-1/3 h-[50vh] w-[50vh] rounded-full bg-primary/20 blur-[120px] animate-aurora-shift [animation-delay:-12s]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
    </div>
  );
}
