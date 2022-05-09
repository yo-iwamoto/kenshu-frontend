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
  target: ["web", "es5"],
};
