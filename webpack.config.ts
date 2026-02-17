import HtmlWebpackPlugin from "html-webpack-plugin"
import path from "path"
import { Configuration, ProgressPlugin } from "webpack";

const mode = "development"
// "production"

const buildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico")
}

const config: Configuration = {
  mode,

  entry: buildPaths.entry,
  output: {
    path: buildPaths.build,
    filename: "[name].[contenthash].js",
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: buildPaths.html, favicon: buildPaths.favicon },
    ),
    new ProgressPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}

export default config