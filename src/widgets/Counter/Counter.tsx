import { useState } from "react"
import './Counter.scss'

interface CounterProps {
  className?: string
}
export const Counter = (
  { className }: CounterProps
) => {
  const [count, setCount] = useState<number>(0)
  return (
    <div className={`
      ${className ? className : undefined}
    `}>
      <div className="counter">Counter</div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+1</button>
    </div>
  )
}