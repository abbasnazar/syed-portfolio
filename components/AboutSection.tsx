import { resume } from "@/lib/resume-data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="about" title="Engineer. Architect. Leader." />
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              {resume.summary.map((p) => (
                <p key={p} className="mb-4 text-sm leading-relaxed text-[var(--muted)] last:mb-0 sm:text-base">
                  {p}
                </p>
              ))}
              <div className="mt-6 flex flex-wrap gap-2">
                {resume.preferredRoles.map((r) => (
                  <span
                    key={r}
                    className="rounded-full bg-[var(--accent)]/15 px-3 py-1 text-xs font-semibold text-violet-200 ring-1 ring-[var(--accent)]/30"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-2">
            <div className="glass h-full rounded-3xl p-6 sm:p-8">
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-2)]">
                Core competencies
              </h3>
              <ul className="space-y-2.5">
                {resume.competencies.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                    <i className="fa-solid fa-circle-check mt-0.5 text-xs text-[var(--accent-2)]" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
