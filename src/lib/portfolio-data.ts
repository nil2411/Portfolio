import {
  Atom,
  BadgeCheck,
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
  { name: "SQL", icon: Database },
  { name: "JavaScript", icon: FileCode2 },
  { name: "TypeScript", icon: FileCode2 },
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "React.js", icon: Atom },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Route },
  { name: "Tailwind CSS", icon: Wind },
  { name: "REST APIs", icon: Globe2 },
  { name: "JWT", icon: Braces },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Leaf },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: GitBranch },
  { name: "VS Code", icon: Code2 },
  { name: "Cursor", icon: Code2 },
  { name: "Codex", icon: Sparkles },
  { name: "Claude", icon: Sparkles },
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
      "AI website builder that turns natural-language prompts into React projects with live preview, chat-based revisions, one-click publishing and export.",
    tags: ["React", "Vite", "Tailwind CSS", "Express", "MongoDB", "JWT", "OpenRouter", "Sandpack"],
    image: "/projects/builder-ai.png",
    live: "https://builder-ai-rouge.vercel.app",
    github: "https://github.com/nil2411/Builder-AI",
    icon: Sparkles,
  },
  {
    title: "Quick.ai",
    description:
      "AI SaaS platform for article writing, blog-title generation, image creation, image editing and resume review in a single dashboard.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express",
      "Clerk",
      "Neon PostgreSQL",
      "Gemini API",
      "Clipdrop",
      "Cloudinary",
    ],
    image: "/projects/quick-ai.png",
    live: "https://quick-ai-frontend-tan.vercel.app/",
    github: "https://github.com/nil2411/QuickAI-/",
    icon: Code2,
  },
  {
    title: "Forever Store",
    description:
      "Full-stack e-commerce platform with a customer storefront and admin dashboard for product management and order tracking.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Stripe",
      "Razorpay",
      "Cloudinary",
    ],
    image: "/projects/forever-store.png",
    live: "https://e-commerce-website-857q.vercel.app/",
    github: "https://github.com/nil2411/E-Commerce-website",
    icon: Package,
  },
];

export const resumeUrl = "/Nilesh-Shete-Resume.pdf";
export const socialImagePath = "/og-image.svg";
export const certification = {
  name: "The Complete Full-Stack Web Development Bootcamp",
  issuer: "Udemy",
  date: "November 2025",
  icon: BadgeCheck,
} as const;
