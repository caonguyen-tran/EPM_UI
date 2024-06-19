/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  purge: [".public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Oswald"],
      body: ["Open Sans"],
    },
  },
  plugins: [
    require("flowbite/plugin")({
      charts: true,
    }),
  ],
};
