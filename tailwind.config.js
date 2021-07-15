
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'xs':{'max':'768px'}
      },
      backgroundImage: theme => ({
        'body-pattern': "url('../assets/img/pattern.png')",

       }),

       colors:{
        'azul-claro':'#4a69bd',
        'azul-oscuro' : '#0c2461'
       },
       animation:{
         'spin-low':'spin 2s linear infinite',
         'from-bellow': 'fromBellow 500ms linear',
         'from-rigth': 'fromRight 350ms linear'


       },
       keyframes:{
         fromBellow:{
           '0%': {transform: 'translateY(0%)'},
           '50%': {transform: 'translateY(200%)'},
           '100%': {transform: 'translateY(0%)'},

         },
         fromRight:{
          '0%': {transform: 'translateX(200%)'},
          '100%': {transform: 'translateX(0%)'},

        },

       }
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],       
    animate: ['responsive', 'hover', 'group-hover'] ,
    extend: {},
  },
  plugins: [],
}