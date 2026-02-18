export interface BuildPaths {
  entry: string
  build: string
  html: string
  favicon: string
}

type BuildMode = "development" | "production"

export interface BuildEnv {
  port: number,
  mode: BuildMode
}

export interface BuildOptions {
  mode: BuildMode
  buildPaths: BuildPaths
  isDev: boolean
  port: number
}