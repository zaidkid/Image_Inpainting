/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "museum-gradient": "radial-gradient(circle at top, #3b82f6 0, transparent 55%), radial-gradient(circle at bottom, #a855f7 0, transparent 55%)",
      },
    },
  },
  plugins: [],
};
