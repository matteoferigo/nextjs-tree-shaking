import * as React from 'react'
import { useCounter } from 'my-lib'

function Counter() {
  const [count, increaseValue] = useCounter(0)

  return (
    <>
      <button id="button" type="button" onClick={increaseValue}>Click me</button>
      <div>
        Count is:
        <span id="count">{count}</span>
      </div>
    </>
  )
}

export default Counter
