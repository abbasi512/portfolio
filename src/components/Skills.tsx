import Reveal from "./Reveal";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="eyebrow">Toolkit</div>
          <h2 className="section-title heading-grad">Skills &amp; technologies I work with.</h2>
          <p className="section-sub">
            A snapshot of the stack I use day-to-day — strongest in the React/Next.js ecosystem
            with hands-on backend, database, and AI work.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 rounded-[10px] border border-border bg-bg-card px-4 py-3.5 transition hover:-translate-y-0.5 hover:border-border-strong hover:bg-white/[0.03]"
              >
                <div
                  className={`flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-md font-mono text-[0.72rem] font-semibold ${skill.bg} ${skill.color}`}
                >
                  {skill.abbr}
                </div>
                <div>
                  <div className="text-[0.88rem] font-medium text-text">{skill.name}</div>
                  <div className="font-mono text-[0.68rem] text-text-dim">{skill.category}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
