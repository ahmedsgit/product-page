module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        windsmook: {
          400: '#5d5d78',
          500: '#48485c',
          700: '#333342',
          800: '#16161c',
          900: '#0C0D0F',
        }
      }
    },
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"Noto Sans Mono"', 'serif'] 
    },
  },
  variants: {
    extend: {
      divideColor: ['group-hover'],
      pointerEvents: ['hover', 'focus'],
    },
  },
  plugins: [],
}
