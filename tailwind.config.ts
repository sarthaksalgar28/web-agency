import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1220",
        surface: "#101826",
        "surface-light": "#16203180",
        primary: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          dark: "#6D28D9",
        },
        success: "#22C55E",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A8B3CF",
        border: "#1E293B",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59,130,246,0.5)",
        "glow-purple": "0 0 40px -10px rgba(124,58,237,0.5)",
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "aurora-gradient":
          "linear-gradient(135deg, #3B82F6 0%, #7C3AED 50%, #3B82F6 100%)",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(5%,-5%) scale(1.1)" },
          "66%": { transform: "translate(-5%,5%) scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "aurora-shift": "aurora-shift 18s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
