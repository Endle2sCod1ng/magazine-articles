const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
const { ProgressPlugin } = require("webpack");

const mode = "development"
// "production"

const buildPaths = {
  entry: path.resolve(__dirname, "src", "index.js"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico")
}

module.exports = {
  mode,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: buildPaths.html, favicon: buildPaths.favicon },
      new ProgressPlugin()
    )
  ],
};