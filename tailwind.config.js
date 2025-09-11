/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite", // 20s per rotation
      },
    },
  },
  plugins: [],
};
