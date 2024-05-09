/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF00BD', // Your custom primary color
        secondary: 'rgb(30 41 59 / var(--tw-bg-opacity))', // Your custom secondary color
      },
    },
  },
  plugins: [],
};
