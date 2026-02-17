export interface BuildPaths {
  entry: string
  build: string
  html: string
  favicon: string
}
type BuildMode = "development" | "production"

export interface BuildOptions {
  mode: BuildMode
  buildPaths: BuildPaths
  isDev: boolean
}