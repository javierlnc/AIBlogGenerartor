/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'orange' : {
        100:'#D97E4A',
        300:'#B4653C'
      },
      'stone' :{
        900:'#261B0E'
      },
      gray: colors.gray,

    },
    extend: {},
  },
  plugins: [],
}

