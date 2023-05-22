/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontSize: {
    //   base: "1.4rem",
    //   title: "2rem",
    // },
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          // light: "rgb(var(--color-primary-light))",
          // dark: "rgb(var(--color-primary-dark))",
        },
        secondary: {
          DEFAULT: "rgv(var(--color-secondary))",
          // light: "rgv(var(--color-secondary-light))",
          // dark: "rgv(var(--color-secondary-dark))",
        },
      },
    },
  },
  plugins: [],
};
