const path = require('path');
module.exports = {
  entry: './public/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/compiled')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};