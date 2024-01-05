import { partition } from "@citrus327/array-partition"
export const _ = Symbol("PLACEHOLDER")

type Matcher<T, R> = [identifier: T, matcherFn: () => R]

type FallbackMatcher<R> = [identifier: typeof _, matcherFn: () => R]

type Matchers<T, R> = (Matcher<T, R> | FallbackMatcher<R>)[]

export const match = <T = any, R = any>(
  target: T,
  matchers: Matchers<T, R>,
) => {
  const [fallback, rest] = partition(matchers, (matcher) => {
    const [identifier] = matcher
    return identifier === _
  }) as [[] | [FallbackMatcher<R>], Matcher<T, R>[]]

  if (fallback.length < 1) {
    throw new Error("[match] should contain at least one fallback matcher")
  }

  let matcherFound = false
  const length = rest.length
  let result = undefined
  for (let i = 0; i < length; i++) {
    const curr = rest[i]
    const [identifier, fn] = curr
    if (identifier === target) {
      matcherFound = true
      result = fn()
      break
    }
  }

  if (matcherFound) {
    return result
  }

  if (fallback.length !== 0) {
    const [, fallbackFn] = fallback[0]
    return fallbackFn()
  }
}
