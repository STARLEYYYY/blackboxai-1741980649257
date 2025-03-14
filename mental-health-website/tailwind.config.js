/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4B0082', // Deep purple color from the website
        'secondary': '#FF69B4', // Pink color for CTA buttons
        'accent': '#8A2BE2', // Secondary purple
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
