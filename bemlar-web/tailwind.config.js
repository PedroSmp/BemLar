/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adiciona 'Nunito' como a fonte principal para a classe 'font-sans'
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
