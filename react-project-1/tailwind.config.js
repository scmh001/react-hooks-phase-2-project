/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flipUp: {
          '75%': {
            transform: 'rotateX(-90deg)',
            opacity: '0'
          },
          '100%': {
            transform: 'rotateX(0deg)',
            opacity: '1'
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'flip-up': 'flipUp 2.5s ease-out 2',
        'shake': 'shake 1s ease-out 1',
        'rotate-y': 'rotateY 1s ease-in-out 1',
      },
    },
  },
    extend: {},
    
  plugins: [],
}

