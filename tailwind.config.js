/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navColor: 'rgba(47, 128, 237, 1)'
      }
      },
  },
  plugins: [],
}