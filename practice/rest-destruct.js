const sum = (i, ...[j, k, l]) => i + j + k +l;

console.log(sum(1,2,3,4)); // 10
console.log(sum(1,1,1,1,1)); // 4 (溢れた分は捨てられる)
