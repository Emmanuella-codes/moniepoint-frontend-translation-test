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
      fontFamily: {
        "primary-1": ["Big Shoulders Display"],
        "secondary-1": ["Poppins"],
      },
      backgroundImage: {
        "gallery-pic-1": "url('/src/assets/images/living-interior.jpg')",
        "gallery-pic-2": "url('/src/assets/images/lifebuoy.jpg')",
        "gallery-pic-3": "url('/src/assets/images/car.jpg')",
        "gallery-pic-4": "url('/src/assets/images/cottage.jpg')",
        "gallery-pic-5": "url('/src/assets/images/pills.jpg')",
      },
    },
  },
  plugins: [],
};
