const colors = require("tailwindcss/colors");

// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
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
    blue: '#1E1ADD',
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
