const path = require("path");

module.exports = {
  mode: process.env.MODE,
  entry: "./src/style/global.scss",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "style.min.js",
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    compress: true,
    port: 3000,
    allowedHosts: "127.0.0.1",
  },
};
