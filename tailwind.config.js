/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#191825",
        primary: "#865DFF",
        secondary: "#E384FF",
        accent: "#FFA3FD",
      },
    },
  },
  plugins: [require("daisyui"), require("@vidstack/player/tailwind.cjs")],
};
