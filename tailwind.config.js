/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#08090d',
          900: '#0d0f16',
          800: '#141722',
          700: '#1d212f',
          600: '#2a2f42',
        },
        accent: {
          DEFAULT: '#5eead4',
          soft: '#a7f3ea',
          dim: '#2dd4bf',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(94, 234, 212, 0.35)',
      },
    },
  },
  plugins: [],
}
