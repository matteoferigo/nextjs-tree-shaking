import { useCallback } from 'react'
import { useCounter } from './counter'

const mockSetState = jest.fn()
jest.mock('react', () => ({
  useState: jest.fn((value) => [value, mockSetState]),
  useCallback: jest.fn(),
}))

describe('useCounter', () => {
  let res
  const increaseValue = jest.fn()

  beforeAll(() => {
    useCallback.mockImplementation(() => increaseValue)
  })

  beforeEach(() => {
    res = useCounter(1)
  })

  it('should return initial value', () => {
    expect(res[0]).toBe(1)
  })

  it('should return increaser', () => {
    expect(res[1]).toEqual(increaseValue)
  })
})
