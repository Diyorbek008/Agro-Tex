export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['LInter', 'sans-serif'],
        'motserat': ['Montserrat', 'sans-serif'],

        backgroundImage: {
          'omborimg': "url('../images/omborimg.jpg')",
        },
      }
    },

    screens: {
      '1400': '1400px',
      '1300': '1300px',
      '1200': '1200px',
      '1100': '1100px',
      '1090': '1090px',
      '1000': '1000px',
      '950': '950px',
      '930': '930px',
      '900': '900px',
      '850': '850px',
      '800': '800px',
      '720': '720px',
      '630': '630px',
      '590': '590px',
      '550': '550px',
      '500': '500px',
      '480': '480px',
      '450': '450px',
      '400': '400px',
    },
  },
  plugins: [],
}