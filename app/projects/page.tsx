import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { profile, projects } from "@/data/profile";

export const metadata = {
  title: `Projects | ${profile.name}`,
  description: "Selected systems and product builds."
};

export default function ProjectsPage() {
  return (
    <Section eyebrow="Projects" title="Systems designed for scale">
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <AnimatedReveal key={project.name} delay={index * 0.05}>
            <Card>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {project.role}
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-fg">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-sm text-muted">
                    {project.description}
                  </p>
                  <div className="mt-4 grid gap-4 text-sm text-muted lg:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">
                        Problem
                      </p>
                      <p className="mt-2">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">
                        Solution
                      </p>
                      <p className="mt-2">{project.solution}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={`${project.name}-${tech}`}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
