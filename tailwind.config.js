/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#002fa1",
        secondary: "#64748b",
        dark: "#0f172a",
        green: "#c1ff72",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
