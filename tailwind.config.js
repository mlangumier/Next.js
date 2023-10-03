/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/context/**/*.{js,ts,jsx,tsx}",
    "./src/views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      base: "1.4rem",
      basexl: "1.7rem",
      medium: "1.6rem",
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
      },
    },
  },
  plugins: [],
};
