const path = require('path');
const Dotenv = require('dotenv-webpack');
const { TailwindCSSWebpackPlugin } = require('tailwindcss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//To trigger a netlify rebuild


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
          use: [
            'style-loader', // Inject CSS into the DOM
            'css-loader',   // Interprets `@import` and `url()` like `import/require()` and resolves them
            'postcss-loader' // Process CSS with PostCSS
          ],
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
      new CopyPlugin({ // Add CopyPlugin configuration
        patterns: [
          { from: 'src/output.css', to: 'output.css' }, // Copy output.css from src to dist
        ],
      }),
    ],
    
  };