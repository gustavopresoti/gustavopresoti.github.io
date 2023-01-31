/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      title: ['Gemunu Libre', 'sans-serif'],
    },
    extend: {
      colors: {
        backgroundColor: "#333237",
        titleColor: "#fb8351",
        subtitleColor: "#ffad64",
        sectionsColor: "#e9e2da",
        color5: "#add4d3"
      },
      backgroundImage: {
        background: "url('/white-waves.jpg')",
        'slider-gradient': 'linear-gradient(180deg, rgba(0,0, 0, 0.65) 100%, rgba(0,0, 0, 0.65) 100%)',
        'hover-slider-gradient': 'linear-gradient(180deg, rgba(0,0, 0, 0) 100%, rgba(0,0, 0, 0) 100%)'
      }
    },
  },
  plugins: [],
}
