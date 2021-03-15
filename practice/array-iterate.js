const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Array オブジェクトのプロトタイプメソッドを使用

// map() 対象の配列の要素一つ一つを任意に加工した新しい配列を返す
console.log(arr.map((n) => n * 2)); // [ 2,  4,  6,  8, 10, 12, 14, 16, 18 ]

// 与えられた条件に適合する要素だけを抽出した新しい配列を返す
console.log(arr.filter((n) => n % 3 === 0)); // [ 3, 6, 9 ]

// 与えられた条件に適合した最初の要素を返す
console.log(arr.find((n) => n > 4)); // 5
console.log(arr.find((n) => n > 101)); // undefined

// 与えられた条件に適合した最初の要素のインデックスを返す
console.log(arr.findIndex((n) => n > 4)); // 4
console.log(arr.findIndex((n) => n === 1)); // 0
console.log(arr.findIndex((n) => n > 9)); // -1

// 与えられた条件を全ての要素が満たすかを真偽値で返す
console.log(arr.every((n) => n !== 0)); // true

// 与えられた条件を満たす要素が一つでもあるかを真偽値で返す
console.log(arr.some((n) => n >= 10)); // false
