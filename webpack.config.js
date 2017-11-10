// We are using node's native package 'path'
// https://nodejs.org/api/path.html
var path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin'); // Import our plugin -> ADDED IN THIS STEP

// Constant with our paths
// const paths = {
//   DIST: path.resolve(__dirname, 'dist'),
//   SRC: path.resolve(__dirname, 'client/src'),
//   JS: path.resolve(__dirname, 'client/src/js'),
// };
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
// Webpack configuration
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',//Why is bundle not routing from index.jsx?
    path: DIST_DIR,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets:['es2015', 'react']
        }
      }
    ]
  }
  // Tell webpack to use html plugin -> ADDED IN THIS STEP
  // index.html is used as a template in which it'll inject bundled app.
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: path.join(paths.SRC, 'index.html'),
  //   }),
  // ],
  // Dev server configuration -> REMOVED IN THIS STEP
  // devServer: {
  //   contentBase: paths.SRC,
  // },
};