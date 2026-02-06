import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border border-border bg-surface p-6 transition-colors hover:border-fg",
        className
      )}
    >
      {children}
    </div>
  );
}
