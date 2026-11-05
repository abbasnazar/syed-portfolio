export function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-2)]">
        {"// "}{eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--muted)] sm:text-base">{sub}</p>}
    </div>
  );
}
