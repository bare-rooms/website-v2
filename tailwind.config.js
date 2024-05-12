/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", 'serif'],
        text: ["Work Sans", 'sans-serif'],
      },
      colors: {
        secondary: "#ffde59"
      },
      screens: {
        xs: '495px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
  
  