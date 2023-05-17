const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        purple: '#9747FF',
        lightblue: '#A2F2F9',
        yellow: '#D8E054',
        darkblue: '#233A59',
        turquoise: '#49D5E1',
        green: '#E6EC59',
        darkgreen: '#1A7A83',
        lightgreen: '#D8E054',
        darkyellow: '#B1B83B',
        darkeryellow: '#73781C',
      },
    },
  },
  plugins: [],
};
