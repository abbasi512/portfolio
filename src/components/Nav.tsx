import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[rgba(8,8,10,0.65)] backdrop-blur-xl backdrop-saturate-150">
      <div className="container-page flex items-center justify-between gap-6 px-[clamp(1.25rem,4vw,2rem)] py-3.5">
        <Link
          href="#top"
          className="flex items-center gap-2 font-mono text-[0.95rem] font-semibold text-text"
        >
          <span className="h-[9px] w-[9px] rounded-full bg-grad-1 shadow-glow" />
          tanzeel.dev
        </Link>

        <ul className="hidden gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3.5 py-1.5 text-sm font-medium text-text-muted transition hover:bg-white/[0.04] hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:tanzeelabbaskhan7@gmail.com"
          className="rounded-md bg-text px-3.5 py-2 text-sm font-medium text-black transition hover:-translate-y-px hover:bg-white"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
