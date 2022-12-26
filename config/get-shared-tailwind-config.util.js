const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('node:path');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const rtl = require('tailwindcss-rtl');

const getSharedTailwindConfig = (dirname) => {
  return {
    content: [
      join(dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
      ...createGlobPatternsForDependencies(dirname),
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
};

module.exports = {
  getSharedTailwindConfig,
};
