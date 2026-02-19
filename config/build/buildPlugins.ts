import HTMLWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import { BuildPaths } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins(buildPaths: BuildPaths): WebpackPluginInstance[] {
  return [new HTMLWebpackPlugin({ template: buildPaths.html, favicon: buildPaths.favicon },
  ),
  new ProgressPlugin(),
  new MiniCssExtractPlugin(
    {
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css"

    }
  )]
}