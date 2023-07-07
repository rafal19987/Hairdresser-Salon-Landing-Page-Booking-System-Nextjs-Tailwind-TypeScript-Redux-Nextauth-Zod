/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      rotate: {
        135: '135deg',
        225: '225deg',
      },
      boxShadow: {
        cardShadow: '-8px 8px 12px 0px rgba(255, 215, 0, 0.38)',
      },
    },
  },
  plugins: [],
};
