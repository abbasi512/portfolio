import Reveal from "./Reveal";
import { education, experience, type TimelineItem } from "@/data/timeline";

function TimelineItemCard({ item }: { item: TimelineItem }) {
  return (
    <div className="relative pb-8 last:pb-0">
      {/* Dot */}
      <span
        className={`absolute left-[-1.93rem] top-[0.45rem] h-[11px] w-[11px] rounded-full border-2 ${
          item.current
            ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(139,92,246,0.18),0_0_14px_rgba(139,92,246,0.4)]"
            : "border-accent bg-bg shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"
        }`}
      />

      <div className="mb-2 flex items-center gap-2 font-mono text-[0.74rem] font-medium tracking-wide text-accent">
        {item.period}
        {item.current && item.currentLabel && (
          <span className="rounded border border-emerald-500/25 bg-emerald-500/10 px-1.5 py-px text-[0.62rem] uppercase tracking-wider text-success">
            {item.currentLabel}
          </span>
        )}
      </div>

      <div className="mb-1 text-[1.05rem] font-semibold tracking-[-0.015em] text-text">
        {item.title}
      </div>

      <div className="mb-3 flex items-center gap-2 text-[0.88rem] text-text-muted">
        <span className="h-1 w-1 rounded-full bg-text-dim" />
        {item.org}
      </div>

      <ul className="grid gap-2">
        {item.points.map((point) => (
          <li
            key={point}
            className="relative pl-4 text-[0.9rem] leading-[1.55] text-text-muted before:absolute before:left-0 before:top-2.5 before:h-px before:w-1.5 before:bg-text-dim"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineColumn({
  heading,
  items,
}: {
  heading: string;
  items: TimelineItem[];
}) {
  return (
    <Reveal>
      <h3 className="mb-7 flex items-center gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-[0.1em] text-text-dim before:h-px before:w-6 before:bg-border-strong before:content-['']">
        {heading}
      </h3>
      <div className="relative border-l border-dashed border-border pl-7">
        {items.map((item) => (
          <TimelineItemCard key={`${item.period}-${item.title}`} item={item} />
        ))}
      </div>
    </Reveal>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="eyebrow">Journey</div>
          <h2 className="section-title heading-grad">Experience &amp; education.</h2>
          <p className="section-sub">
            A snapshot of where I&apos;ve worked, what I&apos;ve studied, and the path I&apos;ve
            taken so far.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-12">
          <TimelineColumn heading="Experience" items={experience} />
          <TimelineColumn heading="Education" items={education} />
        </div>
      </div>
    </section>
  );
}
