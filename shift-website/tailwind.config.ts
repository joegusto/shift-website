import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#080808",
          alt: "#141420",
        },
        accent: {
          DEFAULT: "#5B3FD6",
          light: "#7A5CFF",
          soft: "#9580FF",
          dark: "#3E2A8C",
        },
        dim: "#A0A0A0",
        muted: "#444444",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "Plus Jakarta Sans", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        body: ["17px", { lineHeight: "1.7" }],
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.18" },
          "50%": { opacity: "0.10" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
