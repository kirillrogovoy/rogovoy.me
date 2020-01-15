const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withImages = require('next-images')
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withImages(withBundleAnalyzer({
  webpack(config) {
    config.optimization.usedExports = true
    config.module.rules.push({
      test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
            }
        ]
    })

    return config
  },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
})))
