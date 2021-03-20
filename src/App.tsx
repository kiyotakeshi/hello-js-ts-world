import React from 'react';
import Greets from './components/Greets';
import SummaryText from './components/SummaryText';
import TextInput from './components/TextInput';

// function App() {
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

    // const list = ['patty', 'rolley', 'boddy'];
    // // 繰り返し処理
    // return (
    //     <ul>
    //         {
    //             // list.map((name) => {
    //             // return <li>Hello, {name}</li>;
    //             // })
    //             list.map((name) => (
    //                 <li>Hello, {name}!</li>
    //             ))
    //         }
    //     </ul>
    // );

    // 複数の要素が含まれるときはトップレベルが一つの要素でないといけない
    // const elems = (
    //     // <React.Fragment> の省略記法
    //     <>
    //     <div>foo</div>
    //     <div>bar</div>
    //     <div>baz</div>
    //     </>
    // )
    // return(
    //     <div>{elems}</div>
    // )
// }

// JSX は ReactElement オブジェクトを生成するためのシンタックスシュガー
// <MyComponent foo="bar">baz</MyComponent>
// React.createElement(MyComponent, { foo: 'bar' }, 'baz');
// {
//     type: 'MyComponent',
//     props: { foo: 'bar', children: 'baz'},
//     key: null,
//     ref: null,
// }
const App: React.FunctionComponent = () => (
    <div className="App">
        {/* 定義済みの Greets コンポーネントを JSX で呼んでいる */}
        {/* name, times が props(Properties) */}
        {/* コンポーネントを関数として考えた場合の、引数に相当するものが props */}
        <Greets name="Patty" times={4}>
            {/* 🙇🏿‍♂️ */}
            <span role="img" aria-label="rabbit">🐇🐇🐇</span>
        </Greets>
        {/* Greets,SummaryText などはユーザ定義コンポーネントで大文字から始めないといけない */}
        {/* 小文字から始まるタグ記述は組み込みコンポーネント(DefinitelyTyped)と解釈される */}
        <SummaryText>
            &lt;Summary&gt;<br />
            Patty Hope-rabbit, along with her family, arrives in Maple Town,
            a small town inhabited by friendly animals.

            Soon, the Rabbit Family settles in Maple Town as mail carriers and the bitter,
            yet sweet friendship of Patty and Bobby begins to blossom.
        </SummaryText>
        <TextInput />
        {/* JSX の属性値の Boolean 値は true の場合は省略可能 */}
        {/* <MyButton color="blue" disable={true} /> */}
    </div>
)

export default App;
