/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans3: ['var(--font-montserrat)', 'Arial'],
      sans2: ['var(--font-bungee)', 'Arial'],
      sans: ['var(--font-quicksand)', 'Arial'],
    },
    extend: {},
  },
  plugins: [],
};
