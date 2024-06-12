/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  purge: [".public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Oswald"],
      body: ["Open Sans"],
    },
  },
  plugins: [],
};
