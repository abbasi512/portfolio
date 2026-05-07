import Reveal from "./Reveal";
import { projects, type Project } from "@/data/projects";

function ProjectIcon({ name }: { name: Project["icon"] }) {
  const cls = "h-[22px] w-[22px] text-white";
  switch (name) {
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "resume":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
    case "school":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "invoice":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <line x1="12" y1="11" x2="12" y2="17" />
          <polyline points="9 14 12 17 15 14" />
        </svg>
      );
    case "dots":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden>
          {[6, 12, 18].flatMap((y) =>
            [6, 12, 18].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />)
          )}
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
  }
}

const githubSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[13px] w-[13px]" aria-hidden>
    <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
  </svg>
);

const externalSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[13px] w-[13px]" aria-hidden>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const chatSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[13px] w-[13px]" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

function ProjectCard({ project }: { project: Project }) {
  const isLive = project.status === "live";

  return (
    <Reveal>
      <article className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[14px] border border-border bg-bg-card p-7 transition hover:-translate-y-1 hover:border-border-strong">
        <div
          className={`mb-5 flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br ${project.gradient} shadow-[0_8px_24px_-8px_rgba(139,92,246,0.4)]`}
        >
          <ProjectIcon name={project.icon} />
        </div>

        <div className="mb-2 flex items-center gap-2">
          <span className="font-mono text-[0.7rem] tracking-wider text-text-dim">
            {project.number}
          </span>
          <span
            className={`rounded border px-2 py-0.5 font-mono text-[0.68rem] ${
              isLive
                ? "border-emerald-500/25 bg-emerald-500/10 text-success"
                : "border-amber-500/25 bg-amber-500/10 text-warn"
            }`}
          >
            {project.statusLabel}
          </span>
        </div>

        <h3 className="mb-2 text-[1.2rem] font-semibold tracking-[-0.02em] text-text">
          {project.title}
        </h3>

        <p className="mb-5 flex-1 text-[0.92rem] leading-[1.6] text-text-muted">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-white/[0.04] px-2 py-1 font-mono text-[0.7rem] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-white/[0.05] px-3.5 py-2 text-[0.82rem] font-medium text-text transition hover:border-border-strong hover:bg-white/[0.1]"
            >
              {externalSvg}
              Live demo
            </a>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-white/[0.05] px-3.5 py-2 text-[0.82rem] font-medium text-text transition hover:border-border-strong hover:bg-white/[0.1]"
            >
              {githubSvg}
              Repository
            </a>
          )}

          {project.liveUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-transparent px-3.5 py-2 text-[0.82rem] font-medium text-text-muted transition hover:border-border-strong hover:bg-white/[0.04] hover:text-text"
            >
              {githubSvg}
              Code
            </a>
          ) : (
            <a
              href="#contact"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-transparent px-3.5 py-2 text-[0.82rem] font-medium text-text-muted transition hover:border-border-strong hover:bg-white/[0.04] hover:text-text"
            >
              {chatSvg}
              Ask me
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="eyebrow">Selected Work</div>
          <h2 className="section-title heading-grad">Projects I&apos;ve built &amp; shipped.</h2>
          <p className="section-sub mb-12">
            Six recent projects spanning full-stack platforms, AI tools, and utilities — most are
            live on Vercel.
          </p>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
