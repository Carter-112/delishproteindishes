/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        '102': '1.02',
      },
      animation: {
        gradientMove: 'gradientMove 15s ease infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      transitionDuration: {
        '700': '700ms',
      },
    },
  },
  plugins: [],
};