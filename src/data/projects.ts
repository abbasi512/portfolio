export interface Project {
  number: string;
  title: string;
  description: string;
  stack: string[];
  status: "live" | "draft";
  statusLabel: string;
  liveUrl?: string;
  githubUrl: string;
  /** Tailwind classes for the icon background gradient */
  gradient: string;
  /** Inline SVG path data (using stroke or fill) */
  icon: "code" | "resume" | "school" | "invoice" | "dots" | "zap";
}

export const projects: Project[] = [
  {
    number: "01 / 06",
    title: "ScrubIn",
    description:
      "A healthcare-focused web application built to streamline workflows for medical staff — patient intake, shift scheduling, and clean dashboards designed for clinical environments.",
    stack: ["React", "TypeScript", "Healthcare"],
    status: "draft",
    statusLabel: "In Progress",
    liveUrl: "https://scrub-in.vercel.app",
    githubUrl: "https://github.com/abbasi512/ScrubIn",
    gradient: "from-cyan-500 to-emerald-500",
    icon: "zap",
  },
  {
    number: "02 / 06",
    title: "Student Management System",
    description:
      "A full-stack platform with role-based access for Admins, Teachers, and Students. Includes attendance, grading, course management, dashboard analytics, and report-card downloads.",
    stack: ["Next.js 16", "Node + Express", "PostgreSQL", "Prisma", "JWT"],
    status: "live",
    statusLabel: "Live",
    liveUrl: "https://student-management-system-tan-six.vercel.app",
    githubUrl: "https://github.com/abbasi512/Student-Management-System",
    gradient: "from-emerald-500 to-cyan-500",
    icon: "school",
  },
  {
    number: "03 / 06",
    title: "Invoice Generator",
    description:
      "A clean web tool for creating professional, downloadable invoices in seconds — itemized line entries, tax + discount calculations, and one-click print-ready output.",
    stack: ["HTML", "CSS", "JavaScript"],
    status: "live",
    statusLabel: "Live",
    liveUrl: "https://invoice-generator-phi-blush.vercel.app",
    githubUrl: "https://github.com/abbasi512/invoice-generator",
    gradient: "from-cyan-500 to-blue-500",
    icon: "invoice",
  },
  {
    number: "04 / 06",
    title: "Dot Life",
    description:
      'A minimalist life-visualization app inspired by the "your life in weeks" essay — every dot represents a unit of time, helping you see life at a glance and plan more intentionally.',
    stack: ["Next.js", "JavaScript", "React"],
    status: "live",
    statusLabel: "Live",
    liveUrl: "https://life-in-dots-phi.vercel.app",
    githubUrl: "https://github.com/abbasi512/life-in-dots",
    gradient: "from-pink-500 to-violet-500",
    icon: "dots",
  },
  {
    number: "05 / 06",
    title: "Resumé.ai",
    description:
      "An AI-powered resume builder SaaS using Anthropic Claude to generate quantified bullet points and role-specific skills — with a live, ATS-optimized preview that updates as you type.",
    stack: ["Next.js 14", "TypeScript", "Claude API", "Tailwind"],
    status: "live",
    statusLabel: "Live",
    liveUrl: "https://resume-analyzer.site",
    githubUrl: "https://github.com/abbasi512/resume-ai",
    gradient: "from-amber-500 to-pink-500",
    icon: "resume",
  },
  {
    number: "06 / 06",
    title: "Smart Code Reviewer",
    description:
      "An AI-powered code review tool that analyzes snippets and surfaces suggestions, refactors, and best-practice improvements — built with TypeScript, Next.js, and Tailwind.",
    stack: ["TypeScript", "Next.js", "Tailwind", "AI"],
    status: "live",
    statusLabel: "Live",
    liveUrl: "https://smart-code-reviewer-pi.vercel.app",
    githubUrl: "https://github.com/abbasi512/Smart-Code-Reviewer",
    gradient: "from-violet-500 to-indigo-500",
    icon: "code",
  },
];
