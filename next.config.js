const withMdx = require('@next/mdx')({
  options: {
    providerImportSource: '@mdx-js/react',
  },
})

module.exports = withMdx()
