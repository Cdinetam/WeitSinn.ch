"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LegalDisclosureProps = {
  summary: string;
  children: ReactNode;
};

export function LegalDisclosure({ summary, children }: LegalDisclosureProps) {
  // Open when landing via footer; users can collapse for a quieter page.
  const [open, setOpen] = useState(true);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    detailsRef.current?.scrollIntoView({ block: "nearest" });
  }, []);

  return (
    <details
      ref={detailsRef}
      className="group border-t border-line pt-6"
      open={open}
      onToggle={(event) => {
        setOpen((event.target as HTMLDetailsElement).open);
      }}
    >
      <summary className="cursor-pointer list-none font-serif text-xl tracking-tight text-green transition-colors hover:text-sage-deep [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-3">
          <span
            aria-hidden
            className="inline-block text-sm text-sage-deep transition-transform duration-200 group-open:rotate-90"
          >
            ›
          </span>
          {summary}
        </span>
      </summary>
      <div className="mt-8 space-y-8 text-[1.05rem] leading-relaxed text-foreground-muted">
        {children}
      </div>
    </details>
  );
}
