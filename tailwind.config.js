/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0B0C',
          secondary: '#121212',
          card: '#181818',
          elevated: '#232323',
          border: '#2A2A2A',
        },
        accent: {
          blue: '#4F7CFF',
        },
        neutral: {
          850: '#1C1C1C',
          750: '#2A2A2A',
          650: '#3A3A38',
          550: '#525250',
          450: '#8C8C86',
        },
      },
      fontFamily: {
        sans: ['-apple-system','BlinkMacSystemFont','SF Pro Display','SF Pro Text','Inter','Segoe UI','sans-serif'],
      },
    },
  },
  plugins: [],
}
