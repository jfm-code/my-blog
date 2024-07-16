/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '100px',
        sm: '480px',
        nm: '620px',
        md: '970px',
        lg: '1220px',
        xl: '1490px',
      },
      fontFamily: {
        fontAutography: ['fontAutography', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#7c9e83',
        primarylight: '#d3ddce',
        primarydark: '#2b6f32'
      },
    },
  },
  plugins: [],
})
