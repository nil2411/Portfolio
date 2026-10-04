import { describe, expect, it } from "vitest";

import { navigationItems, projects, resumeUrl, socialImagePath } from "@/lib/portfolio-data";

describe("portfolio content", () => {
  it("keeps the primary navigation anchored to sections on the page", () => {
    expect(navigationItems.map((item) => item.href)).toEqual([
      "#home",
      "#about",
      "#projects",
      "#skills",
      "#contact",
    ]);
  });

  it("uses local assets for every downloadable or displayed portfolio asset", () => {
    expect(resumeUrl).toBe("/Nilesh-Shete-Resume.pdf");
    expect(socialImagePath).toBe("/og-image.svg");
    expect(projects).toHaveLength(3);
    expect(projects.every((project) => project.image.startsWith("/projects/"))).toBe(true);
  });
});
