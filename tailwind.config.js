/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        NeonGreen: "hsl(150, 100%, 66%)",
        DarkGrayishBlue: "hsl(217, 19%, 24%)",
        DarkBlue: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
