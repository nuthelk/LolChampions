/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#102D28 ',
        'secondary': '#00B2CF'
      },
      fontFamily: {
        'Crimson': ['Crimson Text'],
        'Signika': ['Signika Negative']
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}
