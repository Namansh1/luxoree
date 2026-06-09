/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97E',
          dark: '#8B6914',
        },
        black: '#0A0A0A',
        deep: '#111111',
        surface: '#1A1A1A',
        surface2: '#222222',
        white: '#FAFAF8',
        cream: '#F5F0E8',
        muted: '#999',
        border: 'rgba(201,168,76,0.2)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1.2s ease forwards',
        scrollPulse: 'scrollPulse 2s infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
