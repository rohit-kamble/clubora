/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        clubora: {
          blue: "#164968",
          sky: "#D6EAF8",
          navy: "#0F2C3F",
          gold: "#D4AF37",
          gray: "#7A8B99",
          white: "#FFFFFF",
          black: "#0F2C3F",
          yellow: "#D4AF37",
          red: "#EF4444",
          green: "#10B981",
          reddish: "#A6461C",
        },
      },
      fontFamily: {
        headline: ["'Playfair Display'", "serif"],
        body: ["'Lato'", "'Open Sans'", "sans-serif"],
        button: ["'Montserrat'", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
