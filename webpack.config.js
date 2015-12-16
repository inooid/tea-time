module.exports = {
  entry: './src/scripts/script.js',
  output: {
    path: __dirname + '/dist/scripts/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ],
  },
};
