"use client";

import { useEffect, useState } from "react";
import { currentlyBuilding } from "@/data/profile";

export function CurrentlyBuilding() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % currentlyBuilding.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  const item = currentlyBuilding[index];

  return (
    <div className="border border-border bg-surface p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-muted">Currently Building</p>
      <h3 className="mt-3 font-display text-2xl text-fg">{item.title}</h3>
      <p className="mt-4 text-sm text-muted">{item.detail}</p>
    </div>
  );
}
