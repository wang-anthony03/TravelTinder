/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,tsx,ts,jsx}", "./(components)/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

