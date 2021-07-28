
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'xs':{'max':'768px'}
      },
      boxShadow: {
        header3D:"1px 0px #393d3f ,2px 0px #393d3f , 2px 3px 0px #393d3f , 3px 4px 0px #393d3f", 
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
       '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        none: 'none',
      },
      backgroundImage: theme => ({
        'body-pattern': "url('../assets/img/pattern.png')",
        'banner': "url('../assets/img/bakbaner.png')"
        

       }),

       backgroundPosition: {
        'banner-position': '-200px -200px'
      },

       colors:{
        'azul-claro':'#4a69bd',
        'azul-oscuro' : '#0c2461'
       },
       animation:{
         'spin-low':'spin 2s linear infinite',
         'from-bellow': 'fromBellow 500ms linear',
         'from-rigth': 'fromRight 350ms linear',
         'bg-banner': 'fromBanner 10s linear',
         'text-banner':'fromBannerText 10s linear',
         'from-card-icon':'fromCardIcon 300ms linear',
         'from-card-category':'fromCardCategory 300ms linear',
         'from-card-description':'fromCardDescription 300ms linear',

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
        fromBanner:{
          '0%': {'background-position': '0px 0px'},
          '100%': {'background-position': '-200px -200px'},
        },
        fromBannerText:{
          '0%': {
            transform: 'translateX(-600%) scale(5,5)',
            opacity:1,            
          },
          '50%': {
            transform: 'translateX(600%) scale(5,5)',
            opacity:1,            
          },
          '75%': {
            transform: 'translateX(-600%) scale(5,5)',
            'text-shadow': 'none',
            color: 'transparent',
            opacity:0,

          },
          '100%': {
            transform: 'translateX(0%) scale(1,1)',
            'text-shadow': '2px 1px 1px black',
            color: 'white',
            opacity:1,
            
          },
        },

        fromCardIcon:{
          '0%': {transform: 'translateY(-200%)'},
          '100%': {transform: 'translateY(0%)'},
        },

        fromCardCategory:{
          '0%': {transform: 'translateY(-300%)'},
          '100%': {transform: 'translateY(0%)'},
        },

        fromCardDescription:{
          '0%': {transform: 'translateX(-200%)'},
          '100%': {transform: 'translateX(0%)'},

        },


       }
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],       
    animate: ['responsive', 'hover', 'group-hover'] ,
    backgroundPosition: ['hover', 'focus'],
    fontSize: ['hover', 'responsive','group-hover'],
    transform: ['hover', 'responsive','group-hover'],
    scale: ['hover', 'responsive','group-hover'],
    padding: ['hover', 'responsive','group-hover'],

    extend: {},
  },
  plugins: [],
}