/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Creepster', 'sans-serif'],
        main: ['Questrial', 'sans-serif'],
      },
      colors: {
        textGrey: '#656565',
        pinkLight: '#ffcee3',
      },
    },
  },
  variants: {
    extend: { cursor: ['hover', 'focus'] },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
