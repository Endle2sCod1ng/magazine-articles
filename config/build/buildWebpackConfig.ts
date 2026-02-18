import { Configuration } from "webpack";
import { BuildOptions } from "./types";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(buildOptions: BuildOptions): Configuration {
  const { mode, buildPaths, isDev } = buildOptions

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
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(buildOptions) : undefined
  }

  return config
}