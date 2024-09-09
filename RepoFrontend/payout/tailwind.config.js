/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {      
        'primario': '#5C27BB',
        'primarioclaro': '#A483DF',
        'secundario': '#E6EBFF',
        'celeste': '#4151e1',
        'gris': '#575757',
        'grisclaro': '#F4F4F4',
        'danger': 'red',
        'verde' : '#50CFAF',
        'violeta-grad': '#9130f4',
        'azul-grad': '#4646f9',
        dark: {
          DEFAULT: '#121139',
          text: 'white'
        },
        light: {
          DEFAULT: '#E6EBFF',
          text: 'black'
        },

      }
    },
    maxWidth: {
      'full': '100vw',
    },
    fontFamily: {
      sans: ['Montserrat, sans-serif'],
      serif: ['Bruno Ace, sans-serif']
    },
    fontWeight: {
      bold: 700,
      semibold: 600,
      extrabold: 500
    },
    fontSize: {
      'xxs': '0.6875rem',
      'xs': '12px',
      'masxs': '13.9px',
      'sm': '14px',
      'm': '16px',
      'lg': '18px',
      'xl': '48px',
      '2xl': '60px',
      'base': '20px',
      'extra': '25px'
    },    
  },
  plugins: [ function ({ addBase, theme, addComponents }) {
    addBase({
      /* Landing Page  */
      'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold'), color: theme('colors.white')},
      'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.semibold')},
      'h3': { fontSize: theme('fontSize.lg')},

      /* Background color */
      
      /* Footer */
      'footer p': {
        color: theme('colors.black')
      }
    }),
    addComponents({
      'a': {
        fontWeight: theme('fontWeight.semibold')
      }
    })
  }],
}