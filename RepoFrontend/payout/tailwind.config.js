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
        'danger': 'red'
      },
    },
    fontFamily: {
      sans: ['Montserrat, sans-serif'],
      serif: ['Bruno Ace, sans-serif']
    },
    fontWeight: {
      semibold: 600
    },
    fontSize: {
      'xxs': '0.6875rem',
      'xs': '12px',
      'sm': '14px',
      'xl': '0.6875rem'
    }
  },
  plugins: [ ],
}