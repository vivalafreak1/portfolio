module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins'],
    },
    extend: {
      colors: {
          black: {
            DEFAULT: '#29323c',
            dark: '#485563'
          }
        },
    },
  },
  plugins: [],
}
