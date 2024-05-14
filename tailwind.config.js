/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-blue': 'linear-gradient(180deg, #000440, #000425)',
        'nav-custom-blue': 'linear-gradient(180deg, #000440, #000425)',
      },
      colors: {
        'custom-light-Blue' : '#90c2e7',
        'custom-gray': '#C0C0C0',
        'custom-green': '#99BC85',
        'custom-light-green': '#E1F0DA',
        'light-blue': '#1d3557',
      },
    },
  },
  plugins: [],
}

