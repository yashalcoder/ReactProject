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
      blackish:'#000',
      darkOrange:'#EE874D',
      gray:'#EAEFEF',
      textgray:'#A6A6A6',
      lightorange: '#FFCCA8',
      blue:'#559AD7',
      darkblue:'#2F3DBF'
    
    },
    fontFamily: {
      'poppins-bold': ['Poppins-Bold', 'sans'],
      'poppins-light':['Poppins-Light','sans'],
      'poppins-regular':['Poppins-Regular','sans'],
      'poppins-medium':['Poppins-Medium','sans'],
      'poppins-semibold':['Poppins-SemiBold','sans'],
    },
    extend: {},
  },
  plugins: [],
};
