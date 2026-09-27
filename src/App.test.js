import { projects, experience } from "./data/profile";

test("every project has a category and at least one link", () => {
  projects.forEach((project) => {
    expect(["ai", "mobile", "web", "fullstack"]).toContain(project.category);
    expect(Object.keys(project.links).length).toBeGreaterThan(0);
  });
});

test("experience entries have valid start/end dates", () => {
  experience.forEach(({ start, end }) => {
    expect(end[0] * 12 + end[1]).toBeGreaterThan(start[0] * 12 + start[1]);
  });
});
