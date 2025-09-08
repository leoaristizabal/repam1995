/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hover: "#b2cce3",
        blue1: "#5c932c",
        blue2: "#283913",
        red1:"#ff103d",
        orange1: "#c86a12",
      },
      boxShadow: {
        'xl': '0px 10px 60px 0px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
