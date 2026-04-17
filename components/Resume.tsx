import { resume } from "@/lib/resume-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-400 print:text-slate-500">
      {children}
    </h2>
  );
}

function Sidebar() {
  return (
    <aside className="relative order-2 flex flex-col gap-8 overflow-hidden rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-8 text-slate-200 shadow-[0_25px_80px_-20px_rgba(15,23,42,0.65)] ring-1 ring-white/10 print:order-1 print:rounded-2xl print:shadow-none print:ring-slate-300 lg:order-1">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl print:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl print:hidden"
      />

      <section className="relative space-y-4">
        <SectionLabel>Contact</SectionLabel>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-400 ring-1 ring-white/10">
              <i className="fa-solid fa-location-dot" aria-hidden />
            </span>
            <span className="leading-snug pt-1">{resume.location}</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-400 ring-1 ring-white/10">
              <i className="fa-solid fa-phone" aria-hidden />
            </span>
            <a className="pt-1 text-sky-100 transition hover:text-white" href={resume.phoneHref}>
              {resume.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-400 ring-1 ring-white/10">
              <i className="fa-solid fa-envelope" aria-hidden />
            </span>
            <a className="break-all pt-1 text-sky-100 transition hover:text-white" href={resume.emailHref}>
              {resume.email}
            </a>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-400 ring-1 ring-white/10">
              <i className="fa-brands fa-linkedin-in" aria-hidden />
            </span>
            <a className="pt-1 text-sky-100 transition hover:text-white" href={resume.linkedIn.href}>
              {resume.linkedIn.label}
            </a>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-400 ring-1 ring-white/10">
              <i className="fa-solid fa-globe" aria-hidden />
            </span>
            <a className="pt-1 text-sky-100 transition hover:text-white" href={resume.portfolio.href}>
              {resume.portfolio.label}
            </a>
          </li>
        </ul>
      </section>

      <section className="relative space-y-5 border-t border-white/10 pt-2">
        <SectionLabel>Technical Skills</SectionLabel>
        <div className="space-y-5">
          {resume.skillGroups.map((g) => (
            <div key={g.title}>
              <h3 className="mb-2 text-xs font-semibold text-slate-300">{g.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[0.6875rem] text-slate-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mt-auto space-y-4 border-t border-white/10 pt-6">
        <SectionLabel>Education</SectionLabel>
        <ul className="space-y-4">
          {resume.education.map((e) => (
            <li key={e.degree} className="border-l-2 border-sky-500 pl-3 text-sm">
              <p className="font-semibold text-white">{e.degree}</p>
              <p className="text-slate-400">{e.school}</p>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}

function MainColumn() {
  return (
    <div className="order-1 flex flex-col gap-9 rounded-3xl bg-white/80 p-8 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.2)] ring-1 ring-slate-200/80 backdrop-blur-sm print:order-2 print:bg-white print:shadow-none print:ring-slate-200 md:p-10 lg:order-2">
      <header className="space-y-3 border-b border-slate-100 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-[2rem] md:leading-tight">
          {resume.name}
        </h1>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-600">{resume.title}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-sm text-slate-500">
          <a
            href={resume.linkedIn.href}
            className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-slate-600 ring-1 ring-slate-200/80 transition hover:bg-sky-50 hover:text-sky-700"
          >
            <i className="fa-brands fa-linkedin-in text-sky-600" aria-hidden />
            LinkedIn (placeholder)
          </a>
          <a
            href={resume.portfolio.href}
            className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1.5 text-slate-600 ring-1 ring-slate-200/80 transition hover:bg-sky-50 hover:text-sky-700"
          >
            <i className="fa-solid fa-briefcase text-sky-600" aria-hidden />
            Portfolio (placeholder)
          </a>
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-400">Profile Summary</h2>
        <p className="text-[0.95rem] leading-relaxed text-slate-700">{resume.summary}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-400">Key Achievements</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {resume.achievements.map((a) => (
            <div
              key={a.text}
              className="group flex gap-3 rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50/90 to-white p-4 shadow-sm ring-1 ring-sky-100/50 transition hover:-translate-y-0.5 hover:shadow-md print:translate-y-0 print:shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm ring-1 ring-slate-100">
                <i className={`${a.icon} text-lg`} aria-hidden />
              </span>
              <p className="text-sm font-medium leading-snug text-slate-800">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-400">Professional Experience</h2>
        <div className="relative space-y-8 pl-1 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-12px)] before:w-px before:bg-gradient-to-b before:from-sky-300 before:via-slate-200 before:to-slate-200 print:before:bg-slate-200">
          {resume.experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="relative pl-7">
              <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border-[3px] border-white bg-sky-500 shadow-sm ring-1 ring-sky-200 print:border-slate-100" />
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-base font-bold text-slate-900">{job.role}</h3>
                <span className="text-sm font-semibold text-sky-600">{job.company}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{job.period}</span>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-slate-600 marker:text-sky-400">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-400">Featured Projects</h2>
        <ul className="grid gap-3 sm:grid-cols-1">
          {resume.projects.map((p) => (
            <li
              key={p.name}
              className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 ring-1 ring-slate-100/80"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sky-600 shadow-sm ring-1 ring-slate-100">
                <i className={p.icon} aria-hidden />
              </span>
              <p className="text-sm text-slate-700">
                <strong className="text-slate-900">{p.name}</strong> — {p.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-slate-100 pt-6 text-center text-[0.65rem] leading-relaxed text-slate-500">
        {resume.footer}
      </footer>
    </div>
  );
}

export function Resume() {
  return (
    <article
      className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(280px,320px)_1fr] lg:items-start lg:gap-8 print:grid-cols-[minmax(240px,280px)_1fr]"
      aria-label={`Resume for ${resume.name}`}
    >
      <Sidebar />
      <MainColumn />
    </article>
  );
}
