import {
  Atom,
  Braces,
  Coffee,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe2,
  Leaf,
  Package,
  Route,
  Server,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = [
  { name: "Java", icon: Coffee },
  { name: "Python", icon: Braces },
  { name: "JavaScript", icon: FileCode2 },
  { name: "TypeScript", icon: FileCode2 },
  { name: "React.js", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Route },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Leaf },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Git", icon: GitBranch },
  { name: "REST APIs", icon: Globe2 },
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
