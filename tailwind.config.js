/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        screens: {
          'lg': '1170px',
          'xl': '1170px',
          '2xl': '1170px',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        customBg: '#F4F4F4',
        customGreen: '#ABEF5F',
        customPurple: '#E7C1D3',
        customYellow: '#EFDA6E',
        customTeal: '#A4DAC3',
        customCyan: '#77AAEA',
        customGray: {
          100: '#737373',
          200: '#494949', 
          300: '#737373', 
        },
        customDark: {
          100: '#1C1C1C',
          200: '#212121',
        },
      },
    },
  },
  plugins: [],
};
