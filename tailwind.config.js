/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        colorLight : '#7bc476',
        colorBase : '#83bf44',
        colorDark : '#008b48',
        colorContrast: '#00522b'
      }
    },
  },
  plugins: [],
}

