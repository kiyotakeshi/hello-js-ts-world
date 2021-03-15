const isSucceeded = true;
// const isSucceeded = false;

// Promise() は関数を引数に取って、内部でその関数を実行
const promise = new Promise((resolve, reject) => {
    if (isSucceeded) {
        // 引数で渡した関数を実行
        resolve('Success');
    } else {
        reject(new Error('Failure'));
    }
});

promise
    .then((value) => {
        console.log('1.', value);
        return 'Success again';
    })
    .then((value) => {
        console.log('2.', value);
    })
    .catch((error) => {
        console.log('3.', error);
    })
    .finally(() => {
        console.log('4.', 'Completed');
    });

// 1. Success
// 2. Success again
// 4. Completed