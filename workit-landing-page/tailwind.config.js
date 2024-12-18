/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      Green: '#44FFA1',
      Purple900: '#24053E',
      Purple500: '#584D62',
      Purple100: '#FCF8FF',
      White: '#FFFFFF'
    },
    fontFamily: {
      Frauces: '"Fraunces", serif',
      Manrope: '"Manrope", serif'
    }
  },
  plugins: [],
}

