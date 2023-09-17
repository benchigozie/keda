// Generated using webpack-cli https://github.com/webpack/webpack-cli

  const path = require("path");
  const htmlWebpackPlugin = require("html-webpack-plugin");

  module.exports = {

    entry: "./src/index.js",
    output: {
    filename : "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
    plugins: [
    (new htmlWebpackPlugin({
      template: "./src/template.html"
    })),
  ],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  };
  