/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pyeongchang-bold': ['PyeongChangPeace-Bold', 'sans-serif'],
        'pyeongchang-light': ['PyeongChangPeace-Light', 'sans-serif'],
      },
      colors: {
        periwinkle: '#CCCCFF',
      },
    },
  },
  plugins: [],
}