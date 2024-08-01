/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const withMT = require("@material-tailwind/react/utils/withMT");
const franken = require('franken-ui/shadcn-ui/preset-quick');

module.exports = withMT({
  presets: [franken()],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom_xs: '100px',
        custom_sm: '480px',
        custom_nm: '620px',
        custom_md: '970px',
        custom_lg: '1220px',
        custom_xl: '1490px',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
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
});
