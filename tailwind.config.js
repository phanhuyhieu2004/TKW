/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9ff",
          200: "#ddd1ff",
          300: "#c3a7ff",
          400: "#a77cff",
          500: "#8a5cff",
          600: "#6f43ff",
          700: "#5a2ee6",
          800: "#4522b5",
          900: "#321a7f",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(90, 46, 230, 0.25)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse at top, rgba(138, 92, 255, 0.45) 0%, rgba(59, 28, 128, 0) 60%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-14px) translateX(8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        pop: {
          "0%": { transform: "translateY(8px) scale(0.98)", opacity: "0" },
          "100%": { transform: "translateY(0px) scale(1)", opacity: "1" },
        },
        accordionDown: {
          "0%": { maxHeight: "0px", opacity: "0" },
          "100%": { maxHeight: "420px", opacity: "1" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 3.5s ease-in-out infinite",
        pop: "pop 420ms ease-out both",
        accordionDown: "accordionDown 260ms ease-out both",
      },
    },
  },
  plugins: [],
};
