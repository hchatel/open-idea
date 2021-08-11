const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      gray: colors.warmGray,
      green: colors.lime,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
