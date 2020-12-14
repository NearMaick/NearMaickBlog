const withImages = require('next-images')
const path = require('path')

module.exports = withImages({
  target: 'serverless',
  esModule: true,
  inlineImageLimit: false,
  include: path.resolve(__dirname, 'src/assets' ),
  webpack: function (config) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})

    return config
  }
})
