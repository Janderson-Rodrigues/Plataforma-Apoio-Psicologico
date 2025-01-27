/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#5f6FFF"
      }
    },
  },
  // configuração para o modo escuro do site usando tailwind.
  "darkMode": "class",
  plugins: [require('tailwindcss-animated')],
}