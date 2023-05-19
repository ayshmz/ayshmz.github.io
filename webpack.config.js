module.exports = {
  entry: './src/index.js',
  loader: 'css-loader',
  options: {
    modules: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
};
