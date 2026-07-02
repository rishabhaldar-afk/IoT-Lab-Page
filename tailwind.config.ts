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
        coral: {
          50: "#FFF5F5",
          100: "#FFE3E3",
          200: "#FFC9C9",
          300: "#FFA8A8",
          400: "#FF8787",
          500: "#FF6B6B",
          600: "#FA5252",
          700: "#F03E3E",
          800: "#E03131",
          900: "#C92A2A",
        },
        teal: {
          50: "#E6FAF8",
          100: "#B3F0E8",
          200: "#80E6D8",
          300: "#4DDCC8",
          400: "#4ECDC4",
          500: "#38B2AC",
          600: "#2C9A94",
          700: "#21807A",
          800: "#166661",
          900: "#0B4D48",
        },
        sunny: {
          50: "#FFFEF5",
          100: "#FFFCE0",
          200: "#FFF8B3",
          300: "#FFF280",
          400: "#FFE66D",
          500: "#FFD93D",
          600: "#FFC800",
          700: "#E6B400",
          800: "#B38C00",
          900: "#806300",
        },
        lavender: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        mint: {
          50: "#F0FDF9",
          100: "#CCFBEF",
          200: "#99F6E0",
          300: "#95E1D3",
          400: "#5EEAD4",
          500: "#2DD4BF",
          600: "#14B8A6",
          700: "#0D9488",
          800: "#0F766E",
          900: "#115E59",
        },
        surface: {
          50: "#FFFBF5",
          100: "#FFF7EB",
          200: "#FFF0D6",
        },
      },
      fontFamily: {
        heading: ["var(--font-quicksand)", "Quicksand", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
        squish: "squish 0.3s ease-in-out",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        "slide-in-bottom": "slideInBottom 0.4s ease-out forwards",
        blob: "blob 7s infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        squish: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInBottom: {
          from: { opacity: "0", transform: "translateY(100%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        glow: "0 0 40px -10px rgba(255, 107, 107, 0.3)",
        "card-hover":
          "0 20px 60px -15px rgba(0, 0, 0, 0.1), 0 0 30px -10px rgba(78, 205, 196, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
