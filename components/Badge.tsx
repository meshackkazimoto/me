import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border px-3 py-1 text-xs uppercase tracking-[0.2em]",
        className
      )}
    >
      {children}
    </span>
  );
}
