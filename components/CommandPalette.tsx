"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navigation, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const commands = [
  ...navigation.map((item) => ({
    label: item.label,
    href: item.href,
    category: "Navigate"
  })),
  {
    label: "Copy email",
    href: "copy-email",
    category: "Actions"
  },
  {
    label: "Open GitHub",
    href: profile.socials.github,
    category: "Links"
  },
  {
    label: "Open LinkedIn",
    href: profile.socials.linkedin,
    category: "Links"
  },
  {
    label: "Open X",
    href: profile.socials.x,
    category: "Links"
  }
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;
    return commands.filter((command) =>
      command.label.toLowerCase().includes(normalized)
    );
  }, [query]);

  const handleSelect = async (command: (typeof commands)[number]) => {
    if (command.href === "copy-email") {
      await navigator.clipboard.writeText(profile.email);
      setOpen(false);
      return;
    }
    if (command.href.startsWith("/")) {
      router.push(command.href);
      return;
    }
    window.open(command.href, "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 py-16"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-xl border border-border bg-bg">
        <div className="border-b border-border px-4 py-3">
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search commands"
            className="w-full bg-transparent text-sm uppercase tracking-[0.2em] text-fg placeholder:text-muted focus:outline-none"
          />
        </div>
        <div className="max-h-80 overflow-y-auto">
          {filtered.length === 0 && (
            <div className="px-4 py-6 text-sm text-muted">
              No commands found.
            </div>
          )}
          {filtered.map((command) => (
            <button
              key={`${command.category}-${command.label}`}
              type="button"
              onClick={() => handleSelect(command)}
              className={cn(
                "flex w-full items-center justify-between border-b border-border px-4 py-4 text-left text-sm uppercase tracking-[0.2em] transition-colors hover:bg-surface"
              )}
            >
              <span>{command.label}</span>
              <span className="text-xs text-muted">{command.category}</span>
            </button>
          ))}
        </div>
        <div className="border-t border-border px-4 py-3 text-xs uppercase tracking-[0.2em] text-muted">
          Press Esc to close
        </div>
      </div>
    </div>
  );
}
