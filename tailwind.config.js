/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Clubora Design System Colors
        primary: "#000000",
        background: "#FFFFFF",
        accent: "#D35400",
        muted: "#6B6B6B",
        divider: "#E5E5E5",

        // Legacy colors for backward compatibility
        clubora: {
          blue: "#164968",
          sky: "#D6EAF8",
          navy: "#0F2C3F",
          gold: "#D4AF37",
          gray: "#7A8B99",
          white: "#FFFFFF",
          burntOrange: "#D35400",
          black: "#0F2C3F",
          yellow: "#D4AF37",
          red: "#EF4444",
          green: "#10B981",
          reddish: "#A6461C",
        },
      },
      fontFamily: {
        // Clubora Typography System
        sans: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],

        // Legacy font families for backward compatibility
        headline: ["'Inter'", "serif"],
        body: ["Inter", "'Open Sans'", "sans-serif"],
        button: ["Inter, Raleway Fallback", "sans-serif"],
      },
      fontSize: {
        // Clubora Typography Sizes
        h1: ["48px", { lineHeight: "1.3", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "1.35", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["18px", { lineHeight: "1.5", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.5", fontWeight: "300" }],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
