module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./src/**/*.tsx'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
    'postcss-flexbugs-fixes': {},
  },
}
