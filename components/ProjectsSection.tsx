"use client";

import { resume } from "@/lib/resume-data";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

function ProjectLogo({ domain, icon }: { domain: string; icon: string }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/5 text-xl text-[var(--accent-2)] ring-1 ring-white/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt=""
        className="h-7 w-7"
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const fallback = img.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "inline-block";
        }}
      />
      <i className={icon} aria-hidden style={{ display: "none" }} />
    </span>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 border-y border-[var(--border)] bg-[var(--bg-elevated)]/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="work" title="Featured projects" sub="Products and platforms I've architected, built or scaled end-to-end." />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resume.projects.map((p, i) => (
            <li key={p.name} className={p.featured ? "lg:col-span-2 lg:row-span-1" : ""}>
              <Reveal delay={(i % 3) * 80} className="h-full">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass card-hover group flex h-full flex-col rounded-3xl p-6 ${
                    p.featured ? "bg-gradient-to-br from-[var(--accent)]/15 to-[var(--accent-2)]/5" : ""
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between">
                    <ProjectLogo domain={p.logoDomain} icon={p.icon} />
                    <i
                      className="fa-solid fa-arrow-up-right-from-square text-xs text-[var(--muted)] transition group-hover:text-[var(--accent-2)]"
                      aria-hidden
                    />
                  </div>
                  <span className="mb-2 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--accent-2)]">
                    {p.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{p.desc}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
