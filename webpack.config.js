const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin, EnvironmentPlugin } = require("webpack");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(?:jsx?|mjs|cjs|tsx?)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Каталог для статики
    },
    open: true, // Автоматически открывать браузер
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new DefinePlugin({
      process: {
        env: JSON.stringify(process.env),
      },
    }),
  ],
};
