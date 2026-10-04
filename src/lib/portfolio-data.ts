import { Code2, Package, Sparkles, type LucideIcon } from "lucide-react";

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = [
  ["Java", "JV"],
  ["Python", "PY"],
  ["JavaScript", "JS"],
  ["TypeScript", "TS"],
  ["React.js", "RE"],
  ["Node.js", "NO"],
  ["Express.js", "EX"],
  ["MySQL", "MY"],
  ["MongoDB", "MO"],
  ["Tailwind CSS", "TW"],
  ["Git", "GT"],
  ["REST APIs", "API"],
] as const;

export type PortfolioProject = {
  title: string;
  description: string;
  tags: readonly string[];
  image: string;
  live: string;
  github: string;
  icon: LucideIcon;
};

export const projects: readonly PortfolioProject[] = [
  {
    title: "Builder AI",
    description:
      "AI website builder that turns natural-language prompts into React projects with live preview, revisions and one-click publishing.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    image: "/projects/builder-ai.png",
    live: "https://builder-ai-rouge.vercel.app",
    github: "https://github.com/nil2411/Builder-AI",
    icon: Sparkles,
  },
  {
    title: "Quick.ai",
    description:
      "AI SaaS workspace for writing, image generation, editing and resume review, with premium access and creation history.",
    tags: ["React", "Neon DB", "Gemini API", "Clerk"],
    image: "/projects/quick-ai.png",
    live: "https://quick-ai-frontend-tan.vercel.app/",
    github: "https://github.com/nil2411/QuickAI-/",
    icon: Code2,
  },
  {
    title: "Forever Store",
    description:
      "Full-stack commerce platform with product management, order tracking, secure checkout and inventory reservation.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/forever-store.png",
    live: "https://e-commerce-website-857q.vercel.app/",
    github: "https://github.com/nil2411/E-Commerce-website",
    icon: Package,
  },
];

export const resumeUrl = "/Nilesh-Shete-Resume.pdf";
export const socialImagePath = "/og-image.svg";
