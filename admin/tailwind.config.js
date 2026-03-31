/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D6C6A',
        'primary-light': '#0f8a87',
        'primary-dark': '#094e4d',
        'accent': '#14B8A6',
        'surface': '#f0faf9',
      }
    },
  },
  plugins: [],
}