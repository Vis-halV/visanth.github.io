/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        primaryEarthyDark: "#4A4238",
        primaryEarthyWarm: "#6B5B4E",
        accentOlive: "#7A8A72",
        accentRust: "#B5835A",
        textMain: "#E6D8AD",
        textSecondary: "#C9B99A",
        highlightCool: "#3B4C63",
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Spectral', 'serif'],
        accent: ['"Unica One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
