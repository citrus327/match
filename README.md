# @citrus327/array-partition

![Download](https://img.shields.io/npm/dw/@citrus327/array-partition)
![Version](https://img.shields.io/npm/v/@citrus327/array-partition)

partition an array into two.


## Installation

```sh
pnpm install @citrus327/array-partition
```

## Usage

```ts
const arr = [1, 2, 3, 4, 5, 6]
const [target, rest] = partition(arr, (o) => o % 2 === 0)

expect(target).toEqual([2, 4, 6])
expect(rest).toEqual([1, 3, 5])
```
