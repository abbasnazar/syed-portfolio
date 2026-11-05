"use client";

export function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="glass inline-flex h-12 items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold text-white transition hover:border-[var(--accent-2)]/60"
    >
      <i className="fa-solid fa-download text-xs" aria-hidden /> Resume
    </button>
  );
}
