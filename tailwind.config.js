/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'black-background': 'rgb(18,18,18)',
      }
      
    },
  },
  plugins: [require("daisyui")],
}

