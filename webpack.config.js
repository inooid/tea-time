module.exports = {
  entry: './src/scripts/script.js',
  output: {
    path: __dirname + '/dist/scripts/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/,
      }, {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  cssLoader: {
    sourceMap: true,
  },
  sassLoader: {
    indentedSyntax: true,
    sourceMap: true,
  },
};
