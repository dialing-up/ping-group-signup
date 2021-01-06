module.exports = {
  purge: {
    enabled: true,
    content: ["./docs/*.html", "./docs/script.js", "./docs/**/*.svg"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      ringOpacity: ['hover', 'active'],
      ringColor: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
