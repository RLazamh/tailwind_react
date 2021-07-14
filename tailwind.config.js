
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'body-pattern': "url('../assets/img/pattern.png')",

       }),
       colors:{
        'azul-claro':'#4a69bd',
        'azul-oscuro' : '#0c2461'
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}