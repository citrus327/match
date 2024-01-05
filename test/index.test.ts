import { it, describe, expect } from "vitest"
import { match, _ } from "../src"

describe("ok", () => {
  it("should match into 1", () => {
    const a = "hello"
    expect(
      match(a, [
        ["hello", () => 1],
        [_, () => null],
      ]),
    ).toBe(1)
  })

  it("should match into 2", () => {
    const a = "world"
    expect(
      match(a, [
        ["hello", () => 1],
        ["world", () => 2],
        [_, () => null],
      ]),
    ).toBe(2)
  })

  it("should match fallback", () => {
    const a = "apple"
    expect(
      match(a, [
        ["hello", () => 1],
        ["world", () => 2],
        [_, () => null],
      ]),
    ).toBe(null)
  })

  it("should match nothing", () => {
    const a = "apple"
    expect(
      match(a, [
        ["hello", () => 1],
        ["world", () => 2],
        [_, () => undefined],
      ]),
    ).toBe(undefined)
  })

  it("should match enum", () => {
    enum Flag {
      Yes = 1,
      No = 2,
    }
    const flag = Flag.Yes
    expect(
      match(flag, [
        [Flag.Yes, () => "YES"],
        [Flag.No, () => "NO"],
        [_, () => undefined],
      ]),
    ).toBe("YES")
  })
})

describe("throw", () => {
  it("should throw if contains no fallback matcher", () => {
    const a = "hello"
    expect(() => match(a, [])).toThrow(/at\sleast\sone\sfallback/)
  })
})

describe("edge", () => {
  it("should match the first matcher, if identifier is same", () => {
    const a = "hello"

    const result = match(a, [
      ["hello", () => 1],
      ["hello", () => 2],
      ["world", () => 3],
      [_, () => null],
    ])

    expect(result).toBe(1)
    expect(result).not.toBe(2)
  })

  it("should match the first fallback matcher, if has two fallback matchers", () => {
    const a = "hello"

    const result = match(a, [
      [_, () => null],
      [_, () => 4],
    ])

    expect(result).toBe(null)
    expect(result).not.toBe(4)
  })
})
