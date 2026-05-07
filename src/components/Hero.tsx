import Image from "next/image";

const stats = [
  { value: "18+", label: "GitHub repos" },
  { value: "2+", label: "Years coding" },
  { value: "6+", label: "Live projects" },
  { value: "100%", label: "Ship rate" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="section-pad flex min-h-[92vh] items-center !pt-36 !pb-16 md:min-h-screen"
    >
      <div className="container-page w-full">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[1.35fr_0.85fr]">
          {/* Left — text */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[0.78rem] text-success">
              <span className="pulse-success" />
              Available for new projects
            </div>

            <h1 className="mb-6 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em]">
              Building <span className="accent-grad inline-block">elegant&nbsp;web</span>
              <br />
              experiences with Next Js
              <br />
              &amp; modern&nbsp;TypeScript.
            </h1>

            <p className="mb-10 max-w-[520px] text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed text-text-muted">
              I&apos;m{" "}
              <span className="font-medium text-text">Tanzeel Abbas</span> — a React and full-stack
              developer based in Pakistan. I design and ship modern web apps, AI-powered tools, and
              developer experiences with TypeScript, Next.js, and Node.
            </p>

            <div className="mb-12 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-white bg-white px-5 py-3 text-[0.92rem] font-medium text-black transition hover:-translate-y-px hover:shadow-card-hover"
              >
                View my work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://github.com/abbasi512"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-5 py-3 text-[0.92rem] font-medium text-text transition hover:-translate-y-px hover:border-border-strong hover:bg-white/[0.07]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tanzeel512/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-5 py-3 text-[0.92rem] font-medium text-text transition hover:-translate-y-px hover:border-border-strong hover:bg-white/[0.07]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3a1.8 1.8 0 0 0-1.7 1.2c-.1.2-.1.5-.1.8V19h-3V8h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1V19z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[0.82rem] text-text-dim">
              {stats.map((s) => (
                <div key={s.label}>
                  <strong className="block text-[1.4rem] font-semibold tracking-tight text-text">
                    {s.value}
                  </strong>
                  {s.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="relative mx-auto w-full max-w-[280px] aspect-[4/5] md:ml-auto md:max-w-[380px]">
            <div className="absolute -inset-px rounded-[18px] bg-grad-1 opacity-35 blur-[28px]" />
            <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-border-strong bg-bg-card">
              <Image
                src="/tanzeel.png"
                alt="Tanzeel Abbas portrait"
                fill
                priority
                sizes="(max-width: 768px) 280px, 380px"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 rounded-[10px] border border-border bg-[rgba(8,8,10,0.6)] px-3.5 py-3 font-mono text-[0.76rem] text-text-muted backdrop-blur-md">
              <span className="pulse-accent" />
              <span>tanzeel.abbas — react developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
