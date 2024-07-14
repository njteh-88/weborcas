/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './contactUs.html',
    './index.css',
    './tailwind.css',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  }, 
  plugins: [],
};
