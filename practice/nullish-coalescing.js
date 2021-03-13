const users = [
    {
        name: 'Patty',
        address: {
            town: 'Maple Town',
        },
    },
    {
        name: 'Rolley',
        address: {},
    },
    null,
];

for( u of users) {
    // ?? が Nullish Coalescing(コアレッシング)
    // 3人目のユーザが null だから右辺の評価になる
    const user = u ?? { name: '(Somebody)' };

    // ?. で繋いでる部分が Optional Chaining
    // チェーン内の参照が正しいかを明示的に確認せずにアクセスできる
    // > obj.foo
    // undefined
    // > obj.foo.bar
    // Uncaught TypeError: Cannot read property 'bar' of undefined
    // > obj?.foo?.bar
    // undefined

    // タイプエラーを起こさないように if ブロックで書いていた処理が一行で書ける
    const town = user?.address?.town ?? '(Somewhere)';

    console.log(`${user.name} lives in ${town}`);
}
// Patty lives in Maple Town
// Rolley lives in (Somewhere)
// (Somebody) lives in (Somewhere)
