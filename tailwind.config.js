/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--color-cream) / <alpha-value>)",
        linen: "rgb(var(--color-linen) / <alpha-value>)",
        parchment: "rgb(var(--color-parchment) / <alpha-value>)",
        coffee: "rgb(var(--color-coffee) / <alpha-value>)",
        espresso: "rgb(var(--color-espresso) / <alpha-value>)",
        forest: "rgb(var(--color-forest) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        copper: "rgb(var(--color-copper) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 18px 60px rgb(42 27 20 / 0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 600ms ease-out both",
      },
    },
  },
  plugins: [],
};
