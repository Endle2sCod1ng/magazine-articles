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
      <div>App</div>
      <Counter />
    </div>
  )
}