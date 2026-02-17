import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";

export function buildWebpackConfig(buildOptions: BuildOptions): Configuration {
  const { mode, buildPaths } = buildOptions

  const config: Configuration = {
    mode,
    entry: buildPaths.entry,
    output: {
      path: buildPaths.build,
      filename: "[name].[contenthash].js",
      clean: true
    },

    plugins: buildPlugins(buildPaths),

    module: {
      rules: buildLoaders()
    },
    
    resolve: buildResolvers()
  }

  return config
}