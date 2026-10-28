import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mran: {
          red: {
            50: "#fff1f2",
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#f43f5e",
            600: "#e11d48",
            700: "#c1272d", // Primary Brand Crimson
            800: "#9f1239",
            900: "#881337",
            950: "#4c0519",
          },
          navy: {
            50: "#f6f7fb",
            100: "#ebeffd",
            200: "#d7def9",
            300: "#b5c1f3",
            400: "#8da0ea",
            500: "#657adb",
            600: "#485bc9",
            700: "#3745a9",
            800: "#2b245a", // Primary Wordmark Indigo Navy
            900: "#1e1740",
            950: "#0e0b1f",
          },
          dark: {
            bg: "#060a12",
            card: "#0b1120",
            border: "#1a253c",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        arabic: ["var(--font-cairo)", "Cairo", "Alexandria", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(193, 39, 45, 0.25)",
        "glow-indigo": "0 0 25px -5px rgba(43, 36, 90, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
