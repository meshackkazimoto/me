import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-space-mono)", "ui-monospace", "SFMono-Regular"],
        display: ["var(--font-unbounded)", "ui-sans-serif", "system-ui"]
      },
      colors: {
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        border: "var(--border)",
        accent: "var(--accent)",
        accentFg: "var(--accent-fg)",
        surface: "var(--surface)"
      },
      letterSpacing: {
        tightest: "-0.04em"
      }
    }
  },
  darkMode: "class",
  plugins: []
};

export default config;
