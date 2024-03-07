/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        customViolet: "rgb(66,98,255)",
        customBlue: "rgb(2,3,59)",
      },
    },
  },
  plugins: [],
};
