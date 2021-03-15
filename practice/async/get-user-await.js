import fetch from 'node-fetch';

const getUser = async (userId) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
        throw new Error(`${response.status} Error`);
    }

    return response.json();
};

console.log('-- Stat --');

// 関数宣言時に async を付与するとその関数は 非同期関数 となり
// 返される値が Promise.resolve() によってラップされたものになる
const main = async () => {
    try {
        // 非同期関数の中では他の非同期関数を await 演算子をつけて呼び出せる
        // await 式により非同期関数を実行すると、その Promise が resovle されるか reject されるまで待ってくれる
        // ラップしていた Promise から値を抽出して返してくれる
        const user = await getUser(2);
        console.log(user);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('-- Completed --');
    }
};

main();
