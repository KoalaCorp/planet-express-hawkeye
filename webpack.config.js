const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = function (webpackEnv) {
  return {
    mode: webpackEnv,
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            cache: true,
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
      new DuplicatePackageCheckerPlugin(),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      },
    },
  }
}
