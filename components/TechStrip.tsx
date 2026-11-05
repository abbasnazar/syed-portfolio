import { techStrip } from "@/lib/resume-data";

export function TechStrip() {
  const items = [...techStrip, ...techStrip];
  return (
    <div className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg-elevated)]/70 py-5" aria-label="Core stack">
      <div className="marquee gap-3">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="mr-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-4 py-1.5 font-mono text-xs font-medium text-[var(--muted)]"
            aria-hidden={i >= techStrip.length}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
