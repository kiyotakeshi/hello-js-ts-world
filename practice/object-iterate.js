// 標準組み込みオブジェクト Object を継承している
const user = {
    id: 3,
    name: 'mike jackson',
    username: 'mike',
    email: 'mike@gmail.com',
};

// プロパティのキーのリストを配列で取得
console.log(Object.keys(user)); // [ 'id', 'name', 'username', 'email' ]

// プロパティの値のリストを配列で取得
console.log(Object.values(user)); // [ 3, 'mike jackson', 'mike', 'mike@gmail.com' ]

// キーと値が対になった二次元配列で返す
console.log(Object.entries(user));
// [
//     [ 'id', 3 ],
//     [ 'name', 'mike jackson' ],
//     [ 'username', 'mike' ],
//     [ 'email', 'mike@gmail.com' ]
// ]
