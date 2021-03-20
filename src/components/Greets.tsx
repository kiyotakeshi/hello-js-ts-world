import React from 'react';

type Props = { name: string; times?: number };

// Greets を関数コンポーネントとして定義するために、 React.FunctionComponent<P> インターフェースを適用
// P が props の型となるため、 Props というエイリアス型で定義
const Greets: React.FunctionComponent<Props> = (props) => {
    console.log("props");
    console.log(props);

    // 分割代入で値を取り出す際に、 times のデフォルト値を 1 に設定
    // children は JSX が変換される際のメソッドコールである React.createElement() の
    // 第三引数にあたるもの(JSX において属性値ではなく、子要素として記述)
    // 呼ばれた側のコンポーネントでは props として渡される
    // <span role="img" aria-label="rabbit">🐇🐇🐇</span> が渡されている

    // <MyComponent foo="bar">baz</MyComponent>
    // React.createElement(MyComponent, { foo: 'bar' }, 'baz');
    // {
    //     type: 'MyComponent',
    //     props: { foo: 'bar', children: 'baz'},
    //     key: null,
    //     ref: null,
    // }
    const { name, times = 1, children } = props;

    return(
        <>
            {/* 繰り返し処理で同じ階層に同じ要素のリストを表示する際、ユニークな key 属性が必要となる */}
            {/* Each child in a list should have a unique "key" prop. */}
            {/* {[...Array(times)].map((_) => (
                <p>Hello, {name}! {children}</p>
            ))} */}

            {/* key 属性により再レンダリングするための差分検出を効率的に行なっているため、 key にインデックスを使うのは、ユニークな値がない場合の最終手段 */}
            {[...Array(times)].map((_, i) => (
                <p key={i}>Hello, {name}! {children}</p>
            ))}

            {/* i にはインクリメントされた数字が入る */}
            {/* {[...Array(times)].map((_, i) => {
                console.log("i");
                console.log(i); 
                return <p key={i}>Hello, {name}! {children}</p>
            })} */}
        </>
    );
};

export default Greets;
