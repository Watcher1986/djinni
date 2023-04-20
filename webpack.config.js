'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3001,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        mimetype: 'image/svg+xml',
        scheme: 'data',
        type: 'asset/resource',
        generator: {
          filename: '[hash].svg',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            // Extracts CSS for each JS file that includes CSS
            loader: miniCssExtractPlugin.loader,
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader',
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
};

// "devDependencies": {
//   "autoprefixer": "^10.4.14",
//   "clean-webpack-plugin": "^4.0.0",
//   "css-loader": "^6.7.3",
//   "html-webpack-plugin": "^5.5.0",
//   "mini-css-extract-plugin": "^2.7.5",
//   "postcss-loader": "^7.2.4",
//   "sass": "^1.61.0",
//   "sass-loader": "^13.2.2",
//   "style-loader": "^3.3.2",
//   "webpack": "^5.78.0",
//   "webpack-cli": "^5.0.1",
//   "webpack-dev-server": "^4.13.2"
// }
