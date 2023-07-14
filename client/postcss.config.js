const tailwindcss = require('tailwindcss');

module.exports = {
    plugins : [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        require('postcss-sort-media-queries')
    ],

    extends: {
      theme: {
          fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            '2xl': '1.563rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
          }
      },
      height: {
        'sm': '0.875rem',
      },

      width: {
        'fix': '0.875rem',
      }
    }

}