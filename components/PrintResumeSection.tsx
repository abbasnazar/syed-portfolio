import { resume } from "@/lib/resume-data";

/** Print-friendly resume block (hidden on screen, shown when printing). */
export function PrintResumeSection() {
  return (
    <section className="print-only print-root px-6 py-8 text-slate-900" aria-label="Printable resume">
      <h1 className="text-2xl font-bold">{resume.name}</h1>
      <p className="text-sm font-semibold text-slate-600">{resume.title}</p>
      <p className="mt-2 text-xs text-slate-600">
        {resume.location} · {resume.phone} · {resume.email}
      </p>
      <h2 className="mt-6 border-b border-slate-300 pb-1 text-sm font-bold uppercase">Summary</h2>
      <p className="mt-2 text-xs leading-relaxed">{resume.summary}</p>
      <h2 className="mt-4 border-b border-slate-300 pb-1 text-sm font-bold uppercase">Experience</h2>
      <ul className="mt-2 space-y-3 text-xs">
        {resume.experience.map((j) => (
          <li key={j.company}>
            <p className="font-bold">
              {j.role} — {j.company} ({j.period})
            </p>
            <ul className="mt-1 list-disc pl-4">
              {j.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2 className="mt-4 border-b border-slate-300 pb-1 text-sm font-bold uppercase">Projects</h2>
      <ul className="mt-2 list-disc pl-4 text-xs">
        {resume.projects.map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong>: {p.desc}
          </li>
        ))}
      </ul>
      <h2 className="mt-4 border-b border-slate-300 pb-1 text-sm font-bold uppercase">Education</h2>
      <ul className="mt-2 text-xs">
        {resume.education.map((e) => (
          <li key={e.degree}>
            {e.degree} — {e.school}
          </li>
        ))}
      </ul>
    </section>
  );
}
