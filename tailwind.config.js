const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "1.4rem",
      base: "1.6rem",
      xl: "1.8rem",
      "2xl": "2rem",
      "3xl": "2.4rem",
      "4xl": "3rem",
      "5xl": "3.8rem",
      "6xl": "4.8rem",
    },
    extend: {
      backgroundImage: {
        skeleton:
          "linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)",
      },
      backgroundSize: {
        skeleton: "200% 100%",
      },
      keyframes: {
        shine: {
          "100%": {
            backgroundPositionX: "-200%",
          },
        },
      },

      animation: {
        skeleton: "1.5s shine linear infinite;",
      },

      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        grey: "var(--grey)",
        error: "var(--error)",
      },
      maxHeight: {
        options: "26.4rem",
      },
      maxWidth: {
        container: "114rem",
        logo: "7.6rem",
        avatar: "2rem",
        button: "30rem",
      },
      flex: {
        full: "1 0 100%",
      },
      minWidth: {
        label: "5rem",
        select: "25rem",
      },
    },
  },
  plugins: [],
};
