"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

const ThemeContext = createContext<{
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
} | null>(null);

const storageKey = "portfolio-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<"light" | "dark">("light");

  const applyTheme = useCallback((nextTheme: "light" | "dark") => {
    setThemeState(nextTheme);
    const root = window.document.documentElement;
    root.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem(storageKey, nextTheme);
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey) as
      | "light"
      | "dark"
      | null;
    if (stored) {
      applyTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }, [applyTheme]);

  const setTheme = useCallback(
    (nextTheme: "light" | "dark") => {
      applyTheme(nextTheme);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [applyTheme, theme]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [
    theme,
    setTheme,
    toggleTheme
  ]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
