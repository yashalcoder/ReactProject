/** @type {import('tailwindcss').Config} */
const { type } = require("@testing-library/user-event/dist/type");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#FF6340",
      secondory: "#F0EAEA",
      navfooter: "#263241",
      iconcolor: "#E39B27",
      redish: "#FF2B2C",
      orange: "#FFCCA8",
      icongreen: "#00A36E",
      bggreen: "#B3F6CB",
      textcolor: "#FFF",
    },
    fontFamily: {
      "Poppins-Bold": ["Pold", "Poppins-Bold"],
    },
    extend: {},
  },
  plugins: [],
};
