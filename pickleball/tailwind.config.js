/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-custom': `linear-gradient(0deg, ${theme('colors.custom-blue')} 70%, ${theme('colors.custom-yellow')} 100%)`,
      }),
      colors: {
        'custom-blue': '#30708B',
        'custom-lightblue': '#68A2B0',
        'purple': '#825e6e',
        'green': '#676f54',
        'red': '#c73e1d',
        'custom-yellow': '#ffed7d',
        'custom-light': '#fff7e4',
        'custom-white': '#fffafa'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
