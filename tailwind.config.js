module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'matrix-code': "url('/src/assets/matrix_code_01.jpg')",
        'programming-image': "url('/src/assets/programming_00.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        "Roboto": ["Roboto Slab", "serif"],
        cabin: "'Tinos', serif",
        lato: "'Lato', sans-serif",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}