/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        orange:"#ee4d2d",
        gray1:"rgba(0, 0, 0, .87)",
        gray2:"rgba(0, 0, 0, .65)",
        gray3:"rgba(0, 0, 0, .54)",
        red:"#D0011B",
      }
    }
  },
  plugins: []
}