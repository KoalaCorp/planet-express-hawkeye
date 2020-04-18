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
    externals: {
      Config: JSON.stringify(
        webpackEnv === "development"
          ? require("./src/config/development.json")
          : require("./src/config/production.json")
      ),
    },
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
