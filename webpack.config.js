const path = require("path");

const mode="development"
// "production"

const buildPaths={
  entry:path.resolve(__dirname, "src", "index.js"),
  build:path.resolve(__dirname, "build"),
  // html:path.resolve(__dirname, "src", "index.js"),
  // favicon:path.resolve(__dirname, "src", "index.js")
}

module.exports = {
  mode,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean:true
  },
};