import Reveal from "./Reveal";

const VIDEO_URL =
  "https://res.cloudinary.com/dcxuxl7xb/video/upload/v1778147009/7fe1eb2d-c874-4d4e-b773-e95d7e240edc_oz6whb.mp4";

const aboutPoints = [
  "Currently at UIIT, Rawalpindi 🇵🇰",
  "Shipping production apps with Next.js + TypeScript",
  "Comfortable across frontend, API, and database layers",
  "Open to internships, freelance & full-time roles",
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-page">
        <div className="grid items-center gap-12 md:gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Text */}
          <Reveal>
            <div className="eyebrow">About</div>
            <h2 className="section-title heading-grad mb-6">
              A short intro,
              <br />
              in my own voice.
            </h2>
            <p className="mb-4 text-[1.02rem] leading-[1.75] text-text-muted">
              I&apos;m a React and full-stack developer who loves turning ideas into clean, useful
              web products. I work primarily across the modern JavaScript ecosystem —{" "}
              <strong className="font-semibold text-text">
                Next.js, TypeScript, Tailwind, Node, Postgres, Prisma
              </strong>{" "}
              — and I&apos;m increasingly building with LLM APIs to make tools that feel smart and
              effortless.
            </p>
            <ul className="mt-6 grid gap-3">
              {aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.95rem] text-text-muted">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    className="mt-0.5 flex-shrink-0 text-accent"
                    aria-hidden
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Video */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[14px] border border-border-strong bg-bg-card shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
              <div
                className="absolute -inset-px -z-10 rounded-[14px] opacity-50 blur-[18px]"
                style={{
                  background:
                    "linear-gradient(140deg, rgba(139,92,246,0.4), transparent 50%, rgba(99,102,241,0.3))",
                }}
              />
              <video
                controls
                preload="metadata"
                playsInline
                className="block w-full bg-black"
                style={{ aspectRatio: "16 / 9" }}
                poster="/tanzeel.png"
              >
                <source src={VIDEO_URL} type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-[0.78rem] text-text-dim">
                <span>
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
                  intro.mp4 · cinematic · 24s
                </span>
                <span>► hit play</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
