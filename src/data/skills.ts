export interface Skill {
  abbr: string;
  name: string;
  category: string;
  /** Tailwind classes for icon background and text color */
  bg: string;
  color: string;
}

export const skills: Skill[] = [
  { abbr: "RC", name: "React", category: "Frontend", bg: "bg-[rgba(97,218,251,0.1)]", color: "text-[#61dafb]" },
  { abbr: "NX", name: "Next.js", category: "Framework", bg: "bg-white/[0.06]", color: "text-white" },
  { abbr: "TS", name: "TypeScript", category: "Language", bg: "bg-[rgba(49,120,198,0.15)]", color: "text-[#3178c6]" },
  { abbr: "JS", name: "JavaScript", category: "Language", bg: "bg-[rgba(247,223,30,0.12)]", color: "text-[#f7df1e]" },
  { abbr: "TW", name: "Tailwind CSS", category: "Styling", bg: "bg-[rgba(56,189,248,0.12)]", color: "text-[#38bdf8]" },
  { abbr: "CSS", name: "CSS & HTML", category: "Markup", bg: "bg-[rgba(86,156,236,0.12)]", color: "text-[#569ce6]" },
  { abbr: "ND", name: "Node.js", category: "Backend", bg: "bg-[rgba(83,160,90,0.18)]", color: "text-[#84d18d]" },
  { abbr: "EX", name: "Express", category: "Backend", bg: "bg-black/50", color: "text-white" },
  { abbr: "PG", name: "PostgreSQL", category: "Database", bg: "bg-[rgba(51,103,145,0.18)]", color: "text-[#6ba6c7]" },
  { abbr: "PR", name: "Prisma ORM", category: "Database", bg: "bg-[rgba(45,55,72,0.5)]", color: "text-[#a3b2c7]" },
  { abbr: "ZS", name: "Zustand & Zod", category: "State / Validation", bg: "bg-[rgba(255,103,86,0.12)]", color: "text-[#ff6756]" },
  { abbr: "JW", name: "JWT Auth", category: "Security", bg: "bg-[rgba(239,68,68,0.12)]", color: "text-[#ef4444]" },
  { abbr: "AI", name: "Anthropic Claude", category: "AI / LLMs", bg: "bg-[rgba(217,119,87,0.18)]", color: "text-[#d97757]" },
  { abbr: "GT", name: "Git & GitHub", category: "Tooling", bg: "bg-[rgba(240,80,51,0.15)]", color: "text-[#f05033]" },
  { abbr: "VC", name: "Vercel", category: "Deploy", bg: "bg-white/[0.06]", color: "text-white" },
  { abbr: "FR", name: "React Hook Form", category: "Forms", bg: "bg-[rgba(229,98,57,0.15)]", color: "text-[#e56239]" },
];
