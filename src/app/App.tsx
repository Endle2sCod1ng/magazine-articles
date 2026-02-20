import { Suspense, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ArticalsPage } from "../pages/ArticalsPage"
import { Counter } from "../widgets/Counter/Counter"

interface AppProps {
  className?: string
}
type Theme = "light" | "dark"

export const App = (
  { className }: AppProps
) => {
  const [theme, setTheme] = useState<Theme>("dark")
  return (
    <div className={`app app_${theme}_theme
      ${className ? className : undefined}
    `}>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>CHangeTHeme</button>
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