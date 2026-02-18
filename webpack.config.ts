import path from "path"
import { BuildEnv, BuildPaths } from "./config/build/types";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";


export default (env: BuildEnv) => {
  const mode = env.mode || "development"
  const isDev = mode === "development"
  const PORT = env.port || 5000
  const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(__dirname, "public", "favicon.ico")
  }
  
  return buildWebpackConfig({ mode, buildPaths, isDev, port: PORT })
}