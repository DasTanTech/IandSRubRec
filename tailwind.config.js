/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        colorLight : '#7bc476',
        colorBase : '#83bf44',
        colorDark : '#008b48',
        colorContrast: '#00522b',
        colorContent: 'text-neutral-600',
        colorPrimary: '#1fb622',
        colorAccent: '#042a59',
        colorDeAccent: '#4f6a8b'
      },
      fontFamily: {
        title: ['Vollkorn', 'mono'],
        content: ['Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}

