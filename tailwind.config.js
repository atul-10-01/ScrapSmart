/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeScale: {
          '0%': { opacity: '0', transform: 'scale(1)' },
          '100%': { opacity: '1', transform: 'scale(1.10)' },
        },
      },
      animation: {
        fadeScale: 'fadeScale 1s ease-in forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
