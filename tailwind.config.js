/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      darkText: "#fafafa",
      darkBackground: "#050505",
      primary: "#2b65e0",
      darkSecondary: "#131720",
      darkAccent: "#6680ff",
      lightText: "#050505",
      lightBackground: "#fafafa",
      lightSecondary: "#d3e2f8",
      lightAccent: "#2370dc",
      white: "#fff",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  plugins: [],
};
// require("rippleui")
