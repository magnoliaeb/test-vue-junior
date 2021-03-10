const colors = require("tailwindcss/colors");

// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    screens: {
      xs: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
    },
    extend: {},
  },
  colors: {
    gray: colors.coolGray,
    blue: colors.blue,
    purple: colors.purple,
    black: colors.black,
    error: colors.rose,
    white: colors.white,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
