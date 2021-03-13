const original = { a: 1, b: 2, c: 3};

// スプレッド構文を使ったオブジェクトのコピー
const copy = { ...original };

console.log(copy); // { a: 1, b: 2, c: 3 }
console.log(copy === original); // false

// シャローコピーと呼ばれるオブジェクトの階層が一段階までしかコピーされないことを注意する
const assigned = { ...original, ...{ c: 10, d: 50 }, d: 100 };
console.log(assigned); // { a: 1, b: 2, c: 10, d: 100 }

const assigned2 = { ...original, ...{ c: 10, d: 50 }, e: 100 };
console.log(assigned2); // { a: 1, b: 2, c: 10, d: 50, e: 100 }

// 元のオブジェクトが汚染されていない　
console.log(original);
