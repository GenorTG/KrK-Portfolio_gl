/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainOrange: '#f43c04',
        mainBlue: '#0c0c24',
        mainLight: '#1c1c2c',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'], // Add 'Poppins' as the primary font
        'mono': ['Roboto Mono', 'monospace'], // Add 'Roboto Mono' as the monospace font
      },
    },
  },
  plugins: [],
};

