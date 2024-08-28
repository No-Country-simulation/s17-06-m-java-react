/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {        
        'primario': '#5C27BB',
        'secundario': '#E6EBFF',
        'celeste': '#4151e1',
        'gris': '#575757'
      },
    },
  },
  plugins: [ ],
}