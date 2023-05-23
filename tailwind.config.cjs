/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
    colors: {
      darkpink: "#806668",
      pink: "#FF808A",
      lightpink: "#FFCBCF",
      pinkpink: "#CCA3A7",
      textpink: "#804045",
    },
  },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
