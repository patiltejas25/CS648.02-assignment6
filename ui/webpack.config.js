const path = require('path');

module.exports = {
  mode: 'development',
  // entry: './src/App.jsx',
  // entry: { app: './src/App.jsx' },
  entry: { app: ['./browser/App.jsx'] },
  output: {
    // filename: 'app.bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
  },
};
