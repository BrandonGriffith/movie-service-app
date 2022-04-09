module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      screens: {
        'xxxl': '1600px',
      },
    },
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/line-clamp')],
}
