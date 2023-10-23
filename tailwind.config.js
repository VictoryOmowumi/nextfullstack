/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FC8DCA',
        'secondary': '#C37EDB',
        'tertiary': '#B7A676',
        'white': '#F2F2F2',
        'black': '#1A1A1A'
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      backgroundImage: {
        'pattern' : 'url("/feature-bg.png")',
        'hero' : 'url("/4.jpg")'
      }
    },
  },
  plugins: [],
}
