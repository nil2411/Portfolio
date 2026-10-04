import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certification, navigationItems, projects, resumeUrl, skills } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nilesh Shete - Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Nilesh Shete, an Information Technology student building full-stack web applications and AI-powered products.",
      },
      { property: "og:title", content: "Nilesh Shete - Full-Stack Developer" },
      {
        property: "og:description",
        content: "Explore Nilesh Shete's full-stack, AI and e-commerce projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <main
        id="main-content"
        className="min-h-screen overflow-hidden bg-background text-foreground"
      >
        <header className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <a
              href="#home"
              className="text-xl font-extrabold tracking-normal"
              aria-label="Nilesh Shete home"
            >
              NS
            </a>
            <nav
              className="hidden items-center gap-9 text-sm text-muted-foreground md:flex"
              aria-label="Primary navigation"
            >
              {navigationItems.map(({ label, href }) => (
                <a
                  key={href}
                  className={href === "#home" ? "nav-link active" : "nav-link"}
                  href={href}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <Button asChild size="sm" className="rounded-full px-4">
                <a href="mailto:nileshshete2003@gmail.com">
                  Get in touch <ArrowRight />
                </a>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
          {mobileMenuOpen && (
            <nav
              id="mobile-navigation"
              className="mb-4 rounded-xl border border-border bg-card p-3 shadow-hairline md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="grid gap-1">
                {navigationItems.map(({ label, href }) => (
                  <a
                    key={href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </header>

        <section
          id="home"
          className="mx-auto max-w-7xl px-5 pb-14 pt-10 lg:px-10 lg:pb-20 lg:pt-14"
        >
          <div className="max-w-2xl animate-rise">
            <Badge
              variant="outline"
              className="mb-5 gap-2 rounded-full border-border bg-card px-3 py-1 font-medium text-success"
            >
              <span className="size-2 rounded-full bg-success" /> Available for opportunities
            </Badge>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="block text-primary">
                Nilesh <span className="text-foreground">Shete</span>
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              A final-year IT student passionate about building scalable web applications and
              AI-powered products.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#projects">
                  View my work <ArrowRight />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href={resumeUrl} download="Nilesh-Shete-Resume.pdf">
                  <Download /> Download resume
                </a>
              </Button>
            </div>
            <div className="mt-7 flex gap-2">
              <Button asChild variant="ghost" size="icon" className="rounded-full" title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/nilesh-shete-661942346/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full" title="GitHub">
                <a
                  href="https://github.com/nil2411"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full" title="Email">
                <a href="mailto:nileshshete2003@gmail.com" aria-label="Email Nilesh">
                  <Mail />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="grid gap-8 rounded-xl border border-border bg-card p-6 shadow-hairline lg:grid-cols-[260px_1fr] lg:p-8">
            <div>
              <h2 className="font-display text-2xl font-bold">Skills</h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                Technologies I work with to build modern web applications.
              </p>
            </div>
            <div className="flex flex-wrap content-center gap-3">
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex h-11 items-center gap-2 rounded-full border border-border bg-background px-3 text-sm shadow-hairline"
                >
                  <span className="grid size-7 place-items-center rounded-lg bg-secondary text-primary">
                    <Icon aria-hidden="true" className="size-4" strokeWidth={2.25} />
                  </span>
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-16 lg:px-10">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold text-primary">Selected work</p>
              <h2 className="mt-1 font-display text-3xl font-bold">Featured projects</h2>
            </div>
            <a
              href="https://github.com/nil2411"
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:flex"
            >
              View all projects <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-lg border border-border bg-card shadow-hairline transition-transform duration-300 hover:-translate-y-1"
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="block aspect-[16/9] overflow-hidden border-b border-border bg-muted"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} application preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                          <Icon className="size-4" />
                        </span>
                        <h3 className="font-display text-lg font-bold">{project.title}</h3>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          asChild
                          variant="ghost"
                          size="icon"
                          title={`${project.title} source code`}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                          >
                            <Github />
                          </a>
                        </Button>
                        <Button asChild variant="ghost" size="icon" title={`Open ${project.title}`}>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title} live site`}
                          >
                            <ExternalLink />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <p className="mt-4 min-h-20 text-sm leading-6 text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="font-medium">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="about" className="border-y border-border bg-section">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1fr_1.1fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold text-primary">About me</p>
              <h2 className="mt-2 font-display text-3xl font-bold">
                I build products from idea to deployment.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                I'm an Information Technology student at the International Institute of Information
                Technology, Pune. I build real-world products across AI, web and e-commerce, working
                across the stack from interfaces and APIs to databases.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <InfoCard
                icon={GraduationCap}
                label="Education"
                value="B.E. Information Technology - 8.14 CGPA - 2026"
              />
              <InfoCard icon={MapPin} label="Location" value="Pune, India" />
              <InfoCard
                icon={BriefcaseBusiness}
                label="Open to"
                value="Full-time opportunities and internships"
              />
              <InfoCard
                icon={certification.icon}
                label="Certification"
                value={
                  certification.name +
                  " - " +
                  certification.issuer +
                  " (" +
                  certification.date +
                  ")"
                }
              />
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10"
        >
          <div>
            <p className="font-display text-lg font-bold">Let's build something useful.</p>
            <a
              className="mt-1 block text-sm text-muted-foreground hover:text-primary"
              href="mailto:nileshshete2003@gmail.com"
            >
              nileshshete2003@gmail.com
            </a>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 Nilesh Shete</p>
        </footer>
      </main>
    </>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof GraduationCap;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-hairline">
      <span className="mb-4 grid size-10 place-items-center rounded-full bg-secondary">
        <Icon className="size-5" />
      </span>
      <p className="text-sm font-semibold">{label}</p>
      <p className="mt-1 text-sm leading-5 text-muted-foreground">{value}</p>
    </div>
  );
}
