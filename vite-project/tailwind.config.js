/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6B00',
        'secondary': '#FFF5EE',
        'dark': '#1A1A1A',
      },
    },
  },
  plugins: [],
}

