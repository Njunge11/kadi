const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js', // The library entry point
  output: {
    path: path.resolve(__dirname, 'dist'), // An absolute path to the output directory
    filename: 'kadi.js', // The name to use for the output file
    library: 'Kadi', // Name of the library
    libraryTarget: 'umd' // Universal Module Definition
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), // Do not emit the bundle if there are errors while compiling
    new webpack.HotModuleReplacementPlugin() // Enable HMR, of course
  ],
  module: {
    rules: [{
      test: /\.js$/, // Compile all .js files with Babel
      exclude: /(node_modules|bower_components)/, // Do not transform npm  and bower packages, add other unwanted sources
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'] // Run all transforms
        }
      }
    }]
  }
}
