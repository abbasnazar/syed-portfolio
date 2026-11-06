import { resume } from "@/lib/resume-data";

const NAVY = "#1b2f6b";
const BLUE = "#2f6fcb";

function host(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mb-1.5 border-b-2 pb-0.5 text-[8.5pt] font-bold uppercase"
      style={{ color: NAVY, borderColor: NAVY, letterSpacing: "0.22em" }}
    >
      {children}
    </h2>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-[3px] border border-slate-300 bg-slate-100 px-1.5 py-[1px] text-[6.4pt] text-slate-600">
      {children}
    </span>
  );
}

function Bullets({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-[1px] text-[7.2pt] leading-snug text-slate-800">
      {items.map((b) => (
        <li key={b} className="flex gap-1.5">
          <span className="mt-[4px] h-[3px] w-[3px] shrink-0 rounded-full" style={{ background: BLUE }} />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Job({ job }: { job: (typeof resume.experience)[number] }) {
  return (
    <div className="mb-2">
      <div className="flex items-baseline justify-between">
        <p className="text-[9pt] font-bold text-slate-900">
          <span style={{ color: BLUE }}>● </span>
          {job.role} · <span style={{ color: BLUE }}>{job.company}</span>
        </p>
        <p className="text-[7.5pt] text-slate-500">{job.period}</p>
      </div>
      {job.intro && <p className="my-1 text-[7.2pt] text-slate-700">{job.intro}</p>}
      {job.groups.map((g, i) => (
        <div key={i} className="mt-1">
          {g.title && i > 0 && (
            <p className="mb-0.5 text-[8pt] font-bold italic" style={{ color: NAVY }}>
              {g.title}
            </p>
          )}
          <Bullets items={g.bullets} />
        </div>
      ))}
    </div>
  );
}

/** Print-only resume, styled after the PDF resume (hidden on screen). */
export function PrintResumeSection() {
  const [first, ...rest] = resume.experience;
  const half = Math.ceil(resume.skillGroups.length / 2);
  const left = resume.skillGroups.slice(0, half);
  const right = resume.skillGroups.slice(half);

  const SkillBlock = ({ g }: { g: (typeof resume.skillGroups)[number] }) => (
    <div className="mb-2">
      <p className="mb-1 text-[8.2pt] font-bold" style={{ color: NAVY }}>
        {g.title}
      </p>
      <div className="flex flex-wrap gap-1">
        {g.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>
  );

  return (
    <div className="print-only print-root text-slate-900" aria-label="Printable resume" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      {/* PAGE 1 */}
      <section style={{ breakAfter: "page" }}>
        <header className="px-[11mm] pb-2.5 pt-4 text-white" style={{ background: NAVY, borderBottom: `4px solid ${BLUE}` }}>
          <h1 className="text-[24pt] font-bold leading-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            {resume.name}
          </h1>
          <p className="mt-1 text-[9.5pt]">
            <b>{resume.headline}</b> <span className="opacity-60">|</span>{" "}
            <span className="opacity-90">Generative AI &amp; LLM Applications · Full-Stack Architecture · 10+ years</span>
          </p>
          <p className="mt-2 text-[8pt] opacity-90">
            ● {resume.location} &nbsp;&nbsp; ✆ {resume.phone} &nbsp;&nbsp; ✉ {resume.email} &nbsp;&nbsp; ↗ {resume.linkedIn.label} &nbsp;&nbsp; ⌥ {resume.github.label}
          </p>
        </header>

        <div className="px-[11mm] pt-3">
          <Heading>Professional Summary</Heading>
          {resume.summary.map((t) => (
            <p key={t} className="mb-1.5 text-[7.3pt] leading-snug text-slate-800">
              {t}
            </p>
          ))}

          <div className="mt-2">
            <Heading>Key Achievements</Heading>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[7.2pt] leading-snug text-slate-800">
              {resume.printAchievements.map(([a, b, c], i) => (
                <li key={i} className={`flex gap-1.5 ${i === 6 ? "col-span-2" : ""}`}>
                  <span style={{ color: BLUE }}>✓</span>
                  <span>
                    {a}
                    {b && <b>{b}</b>}
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-2">
            <Heading>Core Competencies</Heading>
            <div className="flex flex-wrap gap-1">
              {resume.competencies.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <Heading>Professional Experience</Heading>
            <Job job={first} />
          </div>
        </div>
      </section>

      {/* PAGE 2 */}
      <section className="px-[11mm] py-[8mm]">
        {rest.map((j) => (
          <Job key={j.company} job={j} />
        ))}

        <div className="mt-3">
          <Heading>Technical Skills</Heading>
          <div className="grid grid-cols-2 gap-x-6">
            <div>
              {left.map((g) => (
                <SkillBlock key={g.title} g={g} />
              ))}
            </div>
            <div>
              {right.map((g) => (
                <SkillBlock key={g.title} g={g} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-x-6">
          <div>
            <Heading>Education</Heading>
            {resume.education.map((e) => (
              <div key={e.degree} className="mb-1.5 text-[7.2pt]">
                <p className="font-bold text-slate-900">{e.degree}</p>
                <p style={{ color: BLUE }}>{e.school}</p>
                <p className="text-slate-500">{e.period}</p>
              </div>
            ))}
            <p className="mb-3 text-[7.5pt] italic text-slate-600">Continuous learning: {resume.learning}</p>

            <Heading>Additional Information</Heading>
            <p className="text-[7.2pt] leading-snug">
              <b>Location:</b> {resume.location}
              <br />
              <b>Total Experience:</b> 10+ years
              <br />
              <b>Preferred Roles:</b> {resume.preferredRoles.join(", ")}
            </p>
          </div>

          <div>
            <Heading>Featured Projects</Heading>
            <ul className="space-y-1.5 text-[7.1pt] leading-snug">
              {resume.projects.map((p) => (
                <li key={p.name} className="flex gap-1.5">
                  <span className="mt-[4px] h-[4px] w-[4px] shrink-0 rounded-full" style={{ background: BLUE }} />
                  <span>
                    <b>{p.name}</b> — {p.desc}{" "}
                    <span style={{ color: BLUE }}>{host(p.href)}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
