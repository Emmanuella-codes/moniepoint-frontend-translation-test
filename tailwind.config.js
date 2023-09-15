/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "#0b0f17",
        "dark-blue": "#1f283d",
        "mid-orange": "#ff6476",
        "light-blue": "#84d7e9",
      },
    },
  },
  plugins: [],
};
