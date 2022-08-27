/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['NunitoSans, Arial, sans-serif'],
      headline: ['Epilogue, sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      green: {
        DEFAULT: '#51CE84'
      },
      red: {
        DEFAULT: '#E55F5F'
      },
      primary: {
        light: '#FCC979',
        DEFAULT: '#F8AF38',
        dark: '#FF8E00'
      },
      gray: {
        100: '#F7FBFC',
        200: '#E8F1F4',
        300: '#D3E3E6',
        400: '#B4CDD3',
        500: '#8FAEB5',
        600: '#51757E',
        700: '#365A65',
        800: '#012E3C',
        900: '#032029'
      }
    },
    extend: {},
  },
  plugins: [],
}