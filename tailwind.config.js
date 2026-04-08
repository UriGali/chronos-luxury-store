/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#050505',
          100: '#121212',
          200: '#1a1a1a',
        },
        charcoal: '#2D2D2D',
        slate: '#4F545C',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB'
        },
        silver: {
          DEFAULT: '#C0C0C0',
          light: '#E8E8E8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
