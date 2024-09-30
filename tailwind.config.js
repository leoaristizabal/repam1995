/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hover: "#b2cce3",
        blue1: "#61CAC6",
        blue2: "#B2CCE3",
        red1:"#ff103d",
        orange1: "#f2b705",
      },
      boxShadow: {
        'xl': '0px 10px 60px 0px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
