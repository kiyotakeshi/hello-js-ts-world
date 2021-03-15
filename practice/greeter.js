// const greeter = (target) => {
//     // 不要な代入はさける　
//     // const sayHallo = () => {
//     //     console.log(`Hi, ${target}`);
//     // };
//     // // 返しているのは実行結果ではなく、関数そのもの
//     // return sayHallo;
//     // // 以下のようにすると、その場で関数を実行して結果の undefined を返してしまう
//     // return sayHallo();
//     return () => {
//         console.log(`Hi, ${target}`);
//     }
// };

// アロー関数だと内容が return だけならそのブロックごと表記を省略できる
const greeter = (target) => () => console.log(`Hi, ${target}`);

const greet = greeter('Step Jun');
greet();
