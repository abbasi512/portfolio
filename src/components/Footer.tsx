export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-[clamp(1.25rem,4vw,2rem)] py-8 text-center font-mono text-[0.78rem] text-text-dim">
      <div>
        © {year} <span className="text-text-muted">Tanzeel Abbas</span> · Built with Next.js +
        Tailwind, shipped with care.
      </div>
    </footer>
  );
}
