const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const rtl = require('tailwindcss-rtl');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [typography, forms, rtl],
};
