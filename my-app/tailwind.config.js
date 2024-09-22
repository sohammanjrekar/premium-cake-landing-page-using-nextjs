// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Ensure these paths point to your pages and components
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        deepPurple: '#5D3A91',
        blushPink: '#F7E0E5',
        cream: '#F9F4E8',
        emeraldGreen: '#50B688',
        charcoalGray: '#333333',
      },
    },
  },
  plugins: [],
};
