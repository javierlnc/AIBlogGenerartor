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
        100:'#F2EBE9',
        900:'#261B0E'
      },
      'stone-light':'#F2EBE940',
      gray: colors.gray,
      yellow: colors.yellow,
      black: colors.black

    },
    extend: {},
  },
  plugins: [],
}

