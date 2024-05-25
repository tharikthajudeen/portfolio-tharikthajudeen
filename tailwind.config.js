/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      backgroundImage: {
        'custom-bluee': 'linear-gradient(180deg, #001731, #000425)',
        'nav-custom-blue': 'linear-gradient(180deg, #001731, #000425)',
      },
      colors: {
        'custom-blue': '#000425',
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

