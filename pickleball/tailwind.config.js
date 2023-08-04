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
        'maroon-custom': '#5E251B',
        'green-custom': '#384233',
        'dusky-rose': '#B78B73',
        'cream-custom': '#FDEED6',
        'sand-custom': '#E5D6C2',
        'custom-blue': '#30708B',
        'custom-lightblue': '#68A2B0',
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
