const path = require('path');
const Dotenv = require('dotenv-webpack');
const { TailwindCSSWebpackPlugin } = require('tailwindcss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/script.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // Path to your HTML template
      }),
      new TailwindCSSWebpackPlugin({
        configFile: './tailwind.config.js',
      }),
      new Dotenv(),
    ],
    
  };