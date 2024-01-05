# @citrus327/match

![Download](https://img.shields.io/npm/dw/@citrus327/match)
![Version](https://img.shields.io/npm/v/@citrus327/match)

A basic JavaScript version of Rust pattern matching.

## Installation

```sh
pnpm install @citrus327/match --save
```

## Usage
checkout [tests](https://github.com/citrus327/match/blob/main/test/index.test.ts) for more examples.

### Basic

```ts
import { match, _ } from '@citrus327/match';

function t1 () {
  const a = "hello"
  const result = match(a, [
    ["hello", () => 1],
    ["world", () => 2],
    [_, () => null],
  ])
  console.log(result === 1) // true
}
```

### with Typescript Enum

```ts
import { match, _ } from '@citrus327/match';

function t1 () {
  enum Flag {
    Yes = 1,
    No = 2,
  }
  const flag = Flag.Yes
  const result = match(flag, [
    [Flag.Yes, () => "YES"],
    [Flag.No, () => "NO"],
  ])
  console.log(result === "YES") // true
}
```

## Rules

1. if multiple matchers found, `match` will only match the first one (same as fallback matchers).
2. must contain a fallback matcher, `match` will throw if no fallback matcher found.

These two rules are followed by Rust's implementation.


## Comparison
* In Rust
```rust
fn main() {
  let number = 1;
  match number {
      1 => println!("One!"),
      _ => println!("Ain't special"),
  }

  let boolean = true;
  let binary = match boolean {
      false => 0,
      true => 1,
  };

  println!("{} -> {}", boolean, binary);
}
// output: 
// One!
// true -> 1
```

* In Javascript
```js
import { match, _ } from '@citrus327/match';

function main () {
  let number = 1;
  match(number, [
    [1, () => console.log("One!")],
    [_, () => console.log("Ain't special")]
  ])

  let boolean = true;
  let binary = match(boolean, [
    [false, () => 0],
    [true, () => 1],
  ])

  console.log(`${boolean} -> ${binary}`);
}
// output: 
// One!
// true -> 1
```




