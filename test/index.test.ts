import { it, describe, expect } from "vitest"
import { foo } from "../src"

describe("simple", () => {
  it("should equal", () => {
    expect(foo).toBe("foo")
  })
})
