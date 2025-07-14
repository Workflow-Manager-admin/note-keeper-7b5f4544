import { useState } from 'react'

/**
 * A hook to wrap async functions and provide loading state.
 * T is the return type, A is the arguments tuple type.
 */
export default function useLoading<T = void, A extends unknown[] = unknown[]>(
  fn: (...args: A) => Promise<T>
): [((...args: A) => Promise<T>), boolean] {
  const [loading, setLoading] = useState(false)
  async function runner(...args: A): Promise<T> {
    setLoading(true)
    try {
      return await fn(...args)
    } finally {
      setLoading(false)
    }
  }
  return [runner, loading]
}
