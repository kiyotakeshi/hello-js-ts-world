const response = {
    data: [
        {
            id: 1,
            name: 'Mike',
            email: 'mike@gmail.com',
        },
        {
            id: 2,
            name: 'Kendrick',
            email: 'kendrick@gmail.com',
        },
        {
            id: 3,
            name: 'Kanye',
            email: 'kanye@gmail.com',
        },
        {},
    ],
};

// response の data プロパティの値を分割代入で抽出して、
// users という変数に入れている
// data の値がなかった場合に備えてデフォルト値として空配列を設定
const { data: users = [] } = response;
console.log(users);
// [
//     { id: 1, name: 'Mike', email: 'mike@gmail.com' },
//     { id: 2, name: 'Kendrick', email: 'kendrick@gmail.com' },
//     { id: 3, name: 'Kanye', email: 'kanye@gmail.com' },
//     {}
// ]

// response のプロパティ名と一致していない
const { date: typo = [] } = response;
console.log(typo); // []
