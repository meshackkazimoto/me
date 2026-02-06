"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  value: string;
  label?: string;
  className?: string;
};

export function CopyButton({ value, label = "Copy", className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "border border-border px-3 py-2 text-xs uppercase tracking-[0.2em] text-fg transition-colors hover:border-fg",
        className
      )}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
