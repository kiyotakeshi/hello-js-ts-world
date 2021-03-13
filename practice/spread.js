const arr1 = ['a', 'b', 'c'];

// ... をつけると中身が展開される、レストパラメータと同じ　
const arr2 = [...arr1, 'd', 'e'];
console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e' ]

const obj1 = {a: 1, b: 2, c: 3, d: 4};
const obj2 = {...obj1, d: 11, e: 22};
console.log(obj2); // { a: 1, b: 2, c: 3, d: 11, e: 22 }
