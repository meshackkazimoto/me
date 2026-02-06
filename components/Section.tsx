import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-16", className)}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-8">
            {eyebrow && (
              <p className="text-sm uppercase tracking-[0.2em] text-muted">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl tracking-tightest text-fg">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
