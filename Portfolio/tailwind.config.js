/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure Tailwind processes index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Target all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
