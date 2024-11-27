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
        50:'#F2B591',
        100:'#D97E4A',
        300:'#B4653C'

      },
      'stone' :{
        900:'#261B0E'
      },
      gray: colors.gray,
      yellow: colors.yellow

    },
    extend: {},
  },
  plugins: [],
}

