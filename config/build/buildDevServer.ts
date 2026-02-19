import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export function buildDevServer(buildOptions: BuildOptions): DevServerConfiguration {
  const { port } = buildOptions
  return {
    port: port,
    hot: true,
    // open: true,
    historyApiFallback: true
  }
}