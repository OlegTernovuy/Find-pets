/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue': '#8EBBFF',
        'white': '#f9fafb',
        'gray': '#6b7280',
        'black': '#191a19',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/dog.jpeg')",
      },
      screens: {
        'sm': {'max': '640px'}
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}
