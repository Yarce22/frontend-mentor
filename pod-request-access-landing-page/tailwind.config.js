/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        GreenHover: '#afd9cb',
        Green: '#54E6AF',
        OpacityBlue950: 'rgba(18, 23, 37, .8)',
        Blue950: '#121725',
        Blue900: '#2C344B',
        Blue600: '#5A668A',
        Blue300: '#C2CBE5',
        White: '#FFF',
        Red: '#FB3E3E',
      },
      fontFamily: {
        Chivo: '"Chivo", serif;',
      }
    },
  },
  plugins: [],
}

