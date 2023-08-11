/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      rotate: {
        135: '135deg',
        225: '225deg',
      },
      boxShadow: {
        cardShadow: '-8px 8px 12px 0px rgba(255, 215, 0, 0.38)',
        cardShadowReverse: '8px 8px 12px 0px rgba(255, 215, 0, 0.38)',
      },
    },
    fontFamily: {
      permanentMarker: ['var(--font-permanent-marker)'],
      montserrat: ['var(--font-montserrat)'],
      lato: ['var(--font-lato)'],
    },
  },
  plugins: [],
};
