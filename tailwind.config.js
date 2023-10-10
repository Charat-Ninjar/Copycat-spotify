/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'black-background': '#121212',
      }
      
    },
  },
  plugins: [require("daisyui")],
}

