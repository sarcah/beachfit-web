module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
      extend: {
          fontSize: {
              '7xl': '5rem',
              '8xl': '6rem',
          },
          fontFamily: {
              'montserrat': ['Montserrat'],
              'bebas-neue': ['Bebas neue'],
          },
          height: {
              '3/4': '75%'
          }
      },
  },
};
