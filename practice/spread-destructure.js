const user = {
    id: 1,
    name: 'Mike',
    email: 'mike@gmail.com',
    age: 8,
};

// 分割代入とスプレッド構文の合わせ技
const { id, ...userWithoutId } = user;

console.log(id, userWithoutId) // 1 { name: 'Mike', email: 'mike@gmail.com', age: 8 }
