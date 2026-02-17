import path from "path"
import { BuildPaths } from "./config/build/types";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

const mode = "development"
// "production"
const isDev = mode === "development"

const buildPaths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico")
}

export default buildWebpackConfig({ mode, buildPaths, isDev })