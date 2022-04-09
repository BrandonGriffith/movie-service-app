module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      screens: {
        'xxxl': '2000px',
        'x-plus': '3000px'
      },
    },
  },
  variants: {},
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/line-clamp')],
}
