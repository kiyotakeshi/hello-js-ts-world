const patty = {
    name: 'patty',
    email: 'patty@gmail.com',
    address: { town: 'Maple Town'},
};

const rolley = { ...patty, name: 'rolley' };
rolley.email = 'rolley@gmail.com';
rolley.address.town = 'Palm Town';

// address がオブジェクトであるため、
// オブジェクトへの参照がコピーされてしまい、 town の中身が書き換わってしまった
// shallow copy を意識しないといけない
// Lodash などのユーティリティライブラリを使用する
console.log(patty)
// {
//     name: 'patty',
//     email: 'patty@gmail.com',
//     address: { town: 'Palm Town' }
// }