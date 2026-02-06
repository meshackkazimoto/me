import { AnimatedReveal } from "@/components/AnimatedReveal";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { experiences, profile } from "@/data/profile";

export const metadata = {
  title: `Experience | ${profile.name}`,
  description: "Leadership and execution across fintech systems."
};

export default function ExperiencePage() {
  return (
    <Section eyebrow="Experience" title="Founder and lead developer track record">
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <AnimatedReveal key={experience.company} delay={index * 0.05}>
            <Card>
              <div className="grid gap-6 lg:grid-cols-[200px_1fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {experience.period}
                  </p>
                  <h2 className="mt-3 font-display text-xl">
                    {experience.company}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{experience.title}</p>
                </div>
                <ul className="space-y-4 text-sm text-muted">
                  {experience.achievements.map((item) => (
                    <li key={item} className="border-b border-border pb-4 last:border-b-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}
