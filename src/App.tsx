import React from 'react';

function App() {
    // const name = 'patty';
    // const name = '';
    // const greet = (name: string) => <p>hello, {name || 'Guest'}</p>;
    // {} の中には 式(値を返す表現) のみ記載可能 = if, for などの制御文はかけない
    // テンプレートでは制御構文が積極的に用いられるが JSX では使えない、常に値を返す式でないといけない
    // return <div>{greet(name)}</div>;

    // const n = Math.floor(Math.random() * 10);
    // console.log(n);
    // const thereshold = 5;
    // return (
    //     <div>
    //         {/* 何も出力されない */}
    //         {undefined}
    //         {null}
    //         {true}
    //         {false}

    //         {/* boblean 値が出力されない特性を生かして、レンダリングするものを分ける */}
    //         {/* if 文の代用で && 論理演算子によるショートサーキット評価を使用 */}
    //         {n > thereshold && <p>{n} is lager than {thereshold}</p>}

    //         {/* if-else 文の代用で三項演算子を用いる */}
    //         <p>{n} is {n % 2 === 0 ? 'even' : 'odd'}</p>
    //     </div>
    // );

    const list = ['patty', 'rolley', 'boddy'];

    // 繰り返し処理
    return (
        <ul>
            {
                // list.map((name) => {
                // return <li>Hello, {name}</li>;
                // })
                list.map((name) => (
                    <li>Hello, {name}!</li>
                ))
            }
        </ul>
    );
}

export default App;
