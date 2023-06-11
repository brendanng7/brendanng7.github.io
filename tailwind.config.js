/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js'],
  theme: {
    extend: {
      fontFamily:{
        'pokemon': ["Pokemon Fire Red", 'sans-serif']
      },
      colors:{
        'pkblack': '#081820',
        'pkdarkgreen': '#346856 ',
        'pklightgreen': '#88c070 ',
        'pkwhite': '#e0f8d0',
      }
    },
  },
  plugins: [],
}
