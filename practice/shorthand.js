const key = 'bar';
const baz = 12345;

// オブジェクトの中身を動的に設定する
// オブジェクトプロパティのキー名や値を任意の変数から展開
const obj1 = { foo: 123, [key]: 456, baz: baz};
console.log(obj1); // { foo: 123, bar: 456, baz: 12345 }

// 変数名がキーに値がプロパティ値になる
// プロパティ名のショートハンド
const obj2 = { baz }; 
console.log(obj2); // { baz: 12345 }
