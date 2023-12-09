/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app.jsx",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors:{
        'black1': '#17202A',
        'white1': '#FFFFFF',
        'white2': '#F7F9FA',
        'white3': '#EBEEF0',
        'grey6': '#4E5860',
        'blue1': '#0057A5',
        'red': '#E91655'
      }
    },
  },
  plugins: [],
}

