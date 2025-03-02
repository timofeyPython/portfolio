/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const isDev = !isProd;

  const mode = argv.mode;
  const filename = (ext) =>
    isProd ? `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`;
  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        title: "TimofeyWeb",
        template: path.resolve(__dirname, "./src/index.html"), // шаблон
        filename: "index.html", // название выходного файла
      }),
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new ESLintPlugin(),
      new MiniCssExtractPlugin({
        filename: filename("css"),
      }),
    ];

    return base;
  };

  return {
    entry: {
      // main: path.resolve(__dirname, './src/index.js'),
      main: path.resolve(__dirname, "./src/index.ts"),
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].bundle.js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@core": path.resolve(__dirname, "src/core"),
        "@components": path.resolve(__dirname, "src/components"),
        "@redux": path.resolve(__dirname, "src/redux"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@routes": path.resolve(__dirname, "src/core/routes"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@scss": path.resolve(__dirname, "src/scss"),
        "@types_": path.resolve(__dirname, "src/types"),
      },
    },
    plugins: plugins(),
    devServer: {
      host: "127.0.0.1",
      port: "3000",
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        // ts-loader
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        // SCCS | CSS
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
          use: {
            loader: "url-loader", // this need file-loader
            options: {
              limit: 500000,
            },
          },
        },
        { test: /\.exec.js$/, use: ["script-loader"] },
      ],
    },
  };
};
