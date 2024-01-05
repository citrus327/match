# @citrus327/match

![Download](https://img.shields.io/npm/dw/@citrus327/match)
![Version](https://img.shields.io/npm/v/@citrus327/match)

partition an array into two.


## Installation

```sh
pnpm install @citrus327/match
```

## Usage

```ts
const arr = [1, 2, 3, 4, 5, 6]
const [target, rest] = partition(arr, (o) => o % 2 === 0)

expect(target).toEqual([2, 4, 6])
expect(rest).toEqual([1, 3, 5])
```
