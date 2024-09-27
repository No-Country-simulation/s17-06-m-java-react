/** @type {import('tailwindcss').Config} */

export default {
  content: ["/index.html", "./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {      
        'primario': '#5C27BB',
        'primarioclaro': '#A483DF',
        'secundario': '#E6EBFF',
        'celeste': '#4151e1',
        'celesteform': '#E6EBFF',
        'gris': '#575757',
        'grisclaro': '#F4F4F4',
        'danger': 'red',
        'verde' : '#50CFAF',
        'verdefluo': '#2BE019;',
        'violetagrad': '#9130f4',
        'azulgrad': '#4646f9',
        'navbar-transfer': '#F4F4F4',
        dark: {
          DEFAULT: '#121139',
          text: 'white',
          
        },
        light: {
          DEFAULT: '#E6EBFF',
          text: 'black',
          primario: '#5C27BB',
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
      extralight: 200,
      light: 300,
      medium: 500,
      bold: 700,
      semibold: 600,
      extrabold: 500
    },
    fontSize: {
      'xxs': '0.6875rem',
      'xs': '12px',
      'masxs': '13.9px',
      'sm': '14px',
      'm': '1rem',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '3rem',
      'base': '1.25rem',
      'extra': '1.56rem',
      'payout': '1.88rem',
      'h2': '2.5rem'
    },
  },
  plugins: [ function ({ addBase, theme, addComponents }) {
    addBase({
      /* Landing Page  */
      'h1': { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold'), color: theme('colors.white')},
      'h2': { fontSize: theme('fontSize.payout'), fontWeight: theme('fontWeight.semibold')},
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