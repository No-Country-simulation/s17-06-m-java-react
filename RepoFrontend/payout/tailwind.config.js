/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {      
        'primario': '#5C27BB',
        'secundario': '#E6EBFF',
        'dark': '#121139',
        'celeste': '#4151e1',
        'gris': '#575757',
        'grisclaro': '#F4F4F4',
        'danger': 'red',
        'verde' : '#50CFAF'
      },
      backgroundColor: {
        light: '#E6EBFF',
      }
    },
    fontFamily: {
      sans: ['Montserrat, sans-serif'],
      serif: ['Bruno Ace, sans-serif']
    },
    fontWeight: {
      bold: 700,
      semibold: 600
    },
    fontSize: {
      'xxs': '0.6875rem',
      'xs': '12px',
      'sm': '14px',
      'lg': '18px',
      'xl': '48px',
      '2xl': '60px',
      'base': '20px',
      'extra': '25px'
    }
  },
  plugins: [ function ({ addBase, theme, addComponents }) {
    addBase({
      /* Landing Page  */
      'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold'), color: theme('colors.white')},
      'h2': { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.semibold')},
      'h3': { fontSize: theme('fontSize.lg')},
      'section p': { color: theme('colors.white')},

      /* Background color */
      
      /* Footer */
      'footer p': {
        color: theme('colors.black')
      }
    }),
    addComponents({
      '.dark p, .secundario p': {
        color: theme('colors.white')
      },
      'a': {
        color: '#fff',
        fontWeight: theme('fontWeight.semibold')
      }
    })
  }],
}