const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/context/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1920px",
    },
    fontFamily: {
      bree: ["Bree Serif", ...defaultTheme.fontFamily.serif],
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: "1rem",
      small: "1.2rem",
      base: "1.4rem",
      basexl: "1.7rem",
      medium: "1.6rem",
      lg: "1.8rem",
      "large-20": "2rem",
      "large-22": "2.2rem",
      "large-25": "2.5rem",
      "large-28": "2.8rem",
      "large-30": "3rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          light: "rgb(var(--color-primary-light))",
          dark: "rgb(var(--color-primary-dark))",
        },
        secondary: {
          DEFAULT: "rgv(var(--color-secondary))",
          light: "rgv(var(--color-secondary-light))",
          dark: "rgv(var(--color-secondary-dark))",
        },
        tertiary: {
          DEFAULT: "rgv(var(--color-tertiary))",
          light: "rgv(var(--color-tertiary-light))",
          dark: "rgv(var(--color-tertiary-dark))",
        },
      },
    },
  },
  plugins: [],
};
