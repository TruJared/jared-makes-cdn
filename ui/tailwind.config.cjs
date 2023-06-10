/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary": colors.yellow,
				"secondary": colors.sky,
				"grey": colors.stone,
        "accent": colors.red,
        "accent-secondary": colors.teal
      },
    },
  },
  plugins: [],
};
