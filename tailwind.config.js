/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#1C4646",
        beige: "#F6B67B",
        darkbeige: "#EEAB70",
        turquoise: "#a7d4d3",
        deepgreen: "#143A3A",
        hovergren: "#113434",
      },
      fontFamily: {
        sans: ["var(--font-inter_tight)"],
      },
      screens: {
        sm: "358px",
      },
    },
  },
  plugins: [],
};
