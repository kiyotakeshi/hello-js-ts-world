const plusOne = function(n){
    return n + 1;
}

const addOne = (n) =>{
    return n + 1;
};

// 本文が return だけなら return ブロックを省略できる
const increment = (n) => n + 1

// 引数が一つなら () を省略可能
// Prettier では省略しないのがデフォルトに
const increment2 = n => n + 1

console.log(plusOne(1));
console.log(addOne(1));
console.log(increment(1));
console.log(increment2(1));
