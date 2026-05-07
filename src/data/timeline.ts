export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  points: string[];
  current?: boolean;
  currentLabel?: string;
}

export const experience: TimelineItem[] = [
  {
    period: "2024 — Present",
    title: "React & Full-Stack Developer",
    org: "UIIT · Rawalpindi, Pakistan",
    current: true,
    currentLabel: "Now",
    points: [
      "Building production web applications with Next.js, TypeScript, and Tailwind CSS.",
      "Designing and integrating REST APIs in Node.js / Express with PostgreSQL & Prisma.",
      "Embedding LLM-powered features using the Anthropic Claude API.",
      "Shipping projects to Vercel with CI/CD and modern best practices.",
    ],
  },
  {
    period: "2023 — Present",
    title: "Freelance Web Developer",
    org: "Independent · Remote",
    points: [
      "Delivering custom web apps and tools for clients across small businesses and creators.",
      "Translating ideas into responsive, accessible interfaces with the React ecosystem.",
      "Owning projects end-to-end — from scoping to deployment.",
    ],
  },
  {
    period: "2022 — 2023",
    title: "Self-Taught Developer Journey",
    org: "Continuous Learning",
    points: [
      "Built a foundation in HTML, CSS, JavaScript, and React through projects on GitHub.",
      "Progressed from static sites to full-stack TypeScript applications.",
      "Joined the open-source community to learn from real-world codebases.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    period: "2022 — Present",
    title: "Bachelor's in Information Technology",
    org: "UIIT · University Institute of Information Technology",
    current: true,
    currentLabel: "Ongoing",
    points: [
      "Coursework in software engineering, data structures, databases, and web technologies.",
      "Hands-on capstone projects in full-stack development and modern frameworks.",
      "Active participation in coding communities and developer events.",
    ],
  },
  {
    period: "2020 — 2022",
    title: "Higher Secondary School Certificate (HSSC)",
    org: "Pre-Engineering · Rawalpindi, Pakistan",
    points: [
      "Strong foundation in mathematics, physics, and computer science.",
      "Developed early interest in programming and web development.",
    ],
  },
  {
    period: "Ongoing",
    title: "Continuous Self-Learning",
    org: "Online platforms · Documentation · Community",
    points: [
      "Deep dives on Next.js, TypeScript, and modern React patterns.",
      "Hands-on experimentation with AI APIs, LLM tooling, and developer experience tools.",
      "Reading open-source codebases (Linear, Vercel, Stripe) for design and architecture.",
    ],
  },
];
