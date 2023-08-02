/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme : {
      extend: {},
  },
  container: {
      padding: "2rem",
      center: true,
  },
  screens : {
      sm : "640px",
      md : "768px",
      lg : "1024px",
      xl : "1280px",
  },
  plugins : [],
};