/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cofan-navy': {
          DEFAULT: '#1a2a5e',
          light: '#264080',
          dark: '#142145',
        },
        'cofan-amber': {
          DEFAULT: '#d97706',
          light: '#f59e0b',
          dark: '#b45309',
        },
        'cofan-light': '#f4f7fc',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
