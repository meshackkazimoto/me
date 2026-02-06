import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center border-2 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-colors focus-visible:outline-none";

const variants = {
  primary: "bg-accent text-accentFg border-accent hover:bg-transparent hover:text-accent",
  secondary:
    "bg-transparent text-fg border-border hover:border-fg hover:text-fg",
  outline: "bg-transparent text-fg border-fg hover:bg-fg hover:text-bg"
};

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof variants;
};

export function Button({
  className,
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof variants;
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(baseStyles, variants[variant], className)} {...props} />
  );
}
