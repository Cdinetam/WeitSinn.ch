type ImagePlaceholderProps = {
  label: string;
  aspect?: "portrait" | "landscape" | "square";
  className?: string;
};

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
} as const;

export function ImagePlaceholder({
  label,
  aspect = "landscape",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-beige/60 ${aspectClass[aspect]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(139,151,133,0.18),rgba(228,221,210,0.55)_45%,rgba(47,60,49,0.08))]" />
      <div className="absolute inset-0 flex items-end p-5 sm:p-6">
        <p className="max-w-[16rem] text-xs leading-relaxed tracking-wide text-foreground-muted">
          {label}
          <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.14em] text-sage-deep/80">
            Bildplatzhalter
          </span>
        </p>
      </div>
    </div>
  );
}
