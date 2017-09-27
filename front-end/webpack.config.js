module.exports = {
  entry: './public/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/compiled')
  }
};