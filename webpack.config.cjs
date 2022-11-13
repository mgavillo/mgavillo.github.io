const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvPlugin = require ("dotenv-webpack")
module.exports = {
  mode: prod ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/",
    filename: "index_bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: prod ? undefined : "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin(),
    new DotenvPlugin({
      path: '.env', // Path to .env file (this is the default)
      safe: false, // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ],
};
