/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '5px 5px 10px rgba(58, 128, 233, 0.5)',
      },
      textStrokeWidth: {
        DEFAULT: '1px',
        '2': '12px',
        '12': '32px',
      },
      textStrokeColor: {
        black: 'black',
        white: 'white',
      },
      backgroundColor: {
        'custom-dark': 'linear-gradient(315deg, #2b4162 0%, #12100e 74%)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': 'black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': 'white',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
