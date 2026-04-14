/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Configuramos las fuentes que usaste en Figma
        sans: ['Geist', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        // Acá podemos extender colores si tuvieras algún HEX específico,
        // pero Tailwind ya trae los zinc-950, teal-800 y gray-200 que usaste por defecto.
      }
    },
  },
  plugins: [],
}