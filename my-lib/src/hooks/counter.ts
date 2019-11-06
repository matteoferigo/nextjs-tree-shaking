import { useState, useCallback } from 'react'

type CounterHook = [ number, () => void ]

export function useCounter(initialValue: number = 0): CounterHook {
  const [count, setCount] = useState<number>(initialValue)
  const increaseValue = useCallback(() => setCount(count + 1), [count])

  return [count, increaseValue]
}
