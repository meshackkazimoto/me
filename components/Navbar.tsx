"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/profile";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setElevated(currentY > 10);
      if (currentY > lastY && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-transform",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div
        className={cn(
          "border-b border-border bg-bg",
          elevated && "shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm uppercase tracking-[0.3em]">
            {profile.name}
          </Link>
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="border border-border px-3 py-2 text-xs uppercase tracking-[0.2em] text-fg transition-colors hover:border-fg md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              Menu
            </button>
            <div className="hidden text-[10px] uppercase tracking-[0.3em] text-muted md:block">
              Cmd + K
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-b border-border bg-bg md:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 text-xs uppercase tracking-[0.2em]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted transition-colors hover:text-fg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
