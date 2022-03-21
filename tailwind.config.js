module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navy-peony": "#233B5D",
      },
    },
  },
  darkMode: "media",
  plugins: [require("@tailwindcss/forms")],
};
