/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7f3",
          100: "#d5ecdf",
          200: "#aed9c4",
          300: "#7fc1a3",
          400: "#55a782",
          500: "#3b8c68",
          600: "#2e7255",
          700: "#265c46",
        },
      },
    },
  },
  plugins: [],
};
