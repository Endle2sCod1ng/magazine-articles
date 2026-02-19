declare module '*.scss' {
  interface IClassNames {
    [classnName: string]: string
  }
  const classnNames: IClassNames
  export = classnNames
}