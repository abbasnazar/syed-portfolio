import { techStrip } from "@/lib/resume-data";

export function TechStrip() {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-center text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--muted)] md:text-left">
          Core stack
        </p>
        <p className="text-center text-xs font-medium leading-relaxed text-[var(--muted)] md:text-left md:text-sm">
          <span className="text-white/90">{techStrip.join(" · ")}</span>
        </p>
      </div>
    </div>
  );
}
