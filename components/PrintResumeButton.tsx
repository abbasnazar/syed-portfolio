"use client";

export function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-[var(--coral)] bg-transparent px-8 text-sm font-semibold text-[var(--coral)] transition hover:bg-[var(--coral)]/10"
    >
      My resume
    </button>
  );
}
