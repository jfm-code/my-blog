import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import sortMediaQueries from 'franken-ui/postcss/sort-media-queries';
import combineDuplicatedSelectors from 'franken-ui/postcss/combine-duplicated-selectors';

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'franken-ui/postcss/sort-media-queries': sortMediaQueries({
      sort: 'mobile-first'
    }),
    'franken-ui/postcss/combine-duplicated-selectors': combineDuplicatedSelectors({
      removeDuplicatedProperties: true
    }),
  },
};
