/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': '1200px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
    }
  },
  plugins: [],
}