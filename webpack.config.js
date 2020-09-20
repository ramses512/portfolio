const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const webpack = require("webpack");
const path = require("path");

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: ["@babel/polyfill", "./index.tsx"],
  output: {
    //publicPath: '/',
    //publicPath: '/assets',
    path: path.join(basePath, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    publicPath: '/',
    contentBase: "./src", // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 8081,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
   
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true
    }),
    new BaseHrefWebpackPlugin({ baseHref: 'https://ramses512.github.io/portfolio/' }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
