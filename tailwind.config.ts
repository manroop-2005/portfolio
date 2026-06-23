import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071012",
        panel: "#0d191b",
        line: "rgba(174, 231, 225, 0.16)",
        cyan: "#3ee7d6",
        gold: "#f4b860",
        coral: "#ff7a6b"
      },
      boxShadow: {
        glow: "0 0 40px rgba(62, 231, 214, 0.18)",
        card: "0 18px 60px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
