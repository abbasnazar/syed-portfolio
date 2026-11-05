import { resume } from "@/lib/resume-data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--bg-elevated)]/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="stack" title="Technical skills" />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resume.skillGroups.map((g, i) => (
            <li key={g.title}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <div className="glass card-hover h-full rounded-3xl p-6">
                  <h3 className="mb-4 flex items-center gap-3 text-sm font-bold text-white">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent)]/15 text-[var(--accent-2)]">
                      <i className={g.icon} aria-hidden />
                    </span>
                    {g.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {g.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--border)] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.7rem] text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-10">
          <div className="grid gap-4 md:grid-cols-2">
            {resume.education.map((e) => (
              <div key={e.degree} className="glass flex items-center gap-4 rounded-3xl p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/15 text-[var(--accent-2)]">
                  <i className="fa-solid fa-graduation-cap" aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-white">{e.degree}</p>
                  <p className="text-sm text-[var(--muted)]">
                    {e.school} · {e.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-[var(--muted)]">
            <span className="font-semibold text-white">Continuous learning:</span> {resume.learning}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
