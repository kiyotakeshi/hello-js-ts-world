const [n, m] = [1, 4];

console.log(n, m); // 1 4

const obj = { name: 'Mike', age:24 };

// const name = obj.name のように代入するより分割代入を使う
const { name, age } = obj;

console.log(name, age); // Mike 24
