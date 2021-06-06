const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    'nativejsx-prototypes': './source/prototypal-helpers/index.js',
    'nativejsx-prototypes.min': './source/prototypal-helpers/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new TerserPlugin({
      include: /min\.js$/
    })
  ]
}
