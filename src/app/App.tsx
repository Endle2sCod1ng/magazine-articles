import { Suspense, useContext, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ArticalsPage } from "../pages/ArticalsPage"
import { Counter } from "../widgets/Counter/Counter"
import { ThemeContext } from "./providers/ThemeProvider/ui/ThemeContext"
import { useTheme } from "./providers/ThemeProvider"

interface AppProps {
  className?: string
}
export const App = (
  { className }: AppProps
) => {

  const { theme, changeTheme } = useTheme()

  return (
    <div className={`app app_${theme}_theme
      ${className ? className : undefined}
    `}>
      <button onClick={changeTheme}>CHangeTHeme</button>
      <Link to={"/"}>{"Home"}</Link>
      <Link to={"/articals"}>{"Articals"}</Link>
      <Counter />
      <Suspense fallback={<div>{"Loading..."}</div>}>

        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/articals"} element={<ArticalsPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}