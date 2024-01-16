/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { fontFamily: {
      'sans': ['Fira Sans', 'sans-serif'],
      },
      colors: {
        'backdrop-blue': '#07253d',
        'font-pink': '#e91e63',
      },
    },
  },
  plugins: [],
};
