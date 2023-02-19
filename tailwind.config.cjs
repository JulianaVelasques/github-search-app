/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        'light-mode': '#F6F8FF',
        'dark-mode': '#141D2F',
        'primary-font-dark': '#222731',
        'secondary-font-grey': '#4B6A9B',
        'tertiary-font-grey': '#90A4D4',
        'tertiary-blue': '#0079FF',
        'back-dark-mode': '#1E2A47',
      },
      fontFamily: {
        'space-mono': ['Space Mono', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
