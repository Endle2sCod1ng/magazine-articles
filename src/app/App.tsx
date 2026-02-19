import { Suspense } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ArticalsPage } from "../pages/ArticalsPage"
import { Counter } from "../widgets/Counter/Counter"

interface AppProps {
  className?: string
}
export const App = (
  { className }: AppProps
) => {
  return (
    <div className={`
      ${className ? className : undefined}
    `}>
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