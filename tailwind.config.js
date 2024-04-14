/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white' : '#fff',
      'red' : '#b20606',
      'black' : '#000'
    },
    extend: {},
  },
  plugins: [],
}

