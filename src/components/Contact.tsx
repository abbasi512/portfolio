import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

const mailSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]" aria-hidden>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const githubSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
    <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.01-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 12 .3z" />
  </svg>
);

const linkedinSvg = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
    <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM20 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3a1.8 1.8 0 0 0-1.7 1.2c-.1.2-.1.5-.1.8V19h-3V8h3v1.3a3 3 0 0 1 2.7-1.5c2 0 3.5 1.3 3.5 4.1V19z" />
  </svg>
);

const pinSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-[18px] w-[18px]" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const cards = [
  {
    icon: mailSvg,
    label: "Email",
    value: "tanzeelabbaskhan7@gmail.com",
    href: "mailto:tanzeelabbaskhan7@gmail.com",
  },
  {
    icon: githubSvg,
    label: "GitHub",
    value: "@abbasi512",
    href: "https://github.com/abbasi512",
  },
  {
    icon: linkedinSvg,
    label: "LinkedIn",
    value: "in/tanzeel512",
    href: "https://www.linkedin.com/in/tanzeel512/",
  },
  {
    icon: pinSvg,
    label: "Location",
    value: "Rawalpindi, Pakistan",
    href: undefined as string | undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad pb-20 text-center">
      <div className="container-page max-w-[760px]">
        <Reveal>
          <div className="eyebrow mb-8">Let&apos;s connect</div>
          <h2 className="heading-grad mb-6 text-[clamp(2.4rem,5.5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.035em]">
            Have an idea?
            <br />
            Let&apos;s build it together.
          </h2>
          <p className="mx-auto mb-10 max-w-[520px] text-[1.1rem] leading-[1.65] text-text-muted">
            I&apos;m currently open to internships, freelance projects, and full-time roles. Drop a
            message below — or use any of the channels at the bottom. I usually respond within a
            day.
          </p>

          {/* Contact form */}
          <ContactForm />

          {/* Quick channels */}
          <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:grid-cols-2">
            {cards.map((card) => {
              const inner = (
                <>
                  <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[8px] border border-accent/20 bg-accent/[0.12]">
                    <span className="text-accent">{card.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[0.7rem] uppercase tracking-wider text-text-dim">
                      {card.label}
                    </div>
                    <div className="break-all text-[0.92rem] text-text">{card.value}</div>
                  </div>
                </>
              );

              const baseCls =
                "flex items-start gap-3.5 rounded-[11px] border border-border bg-bg-card p-5 transition";

              return card.href ? (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`${baseCls} hover:-translate-y-0.5 hover:border-border-strong hover:bg-white/[0.02]`}
                >
                  {inner}
                </a>
              ) : (
                <div key={card.label} className={baseCls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
