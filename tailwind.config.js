/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.page.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/stories/*.stories.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e0849e",
          "secondary": "#9dea8a",
          "accent": "#e276cb",
          "neutral": "#141A1F",
          "base-100": "#2D2A3C",
          "info": "#4661CE",
          "success": "#50E2BB",
          "warning": "#AA8913",
          "error": "#E23243",
        },
      },
    ],
  },
};
