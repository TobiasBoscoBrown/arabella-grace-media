import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        "ink-2": "#0B0B0D",
        "ink-3": "#101013",
        "ink-line": "#1C1C20",
        ivory: "#F4EFE6",
        "ivory-dim": "#CFC8BA",
        gold: "#C8A96A",
        "gold-soft": "#D9C29A",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: { reading: "68ch" },
      letterSpacing: { luxe: "0.2em", wide2: "0.32em" },
    },
  },
  plugins: [],
};
export default config;
