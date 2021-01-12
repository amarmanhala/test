module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#050505',
        white: '#f2f2f2',
        grey: '#111',
        greyText: '#6e6e73',
        pureWhite: '#ffffff',
       },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': ['1.5rem', '40px'],
      '4xl': ['2.25rem', '54px']
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '980px',
          },
          '@screen xl': {
            maxWidth: '1024px',
          },
          '@screen 2xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ]
}
