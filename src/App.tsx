import React from 'react';

function App() {
    // const name = 'patty';
    const name = '';
    const greet = (name: string) => <p>hello, {name || 'Guest'}</p>;
    // {} の中には 式(値を返す表現) のみ記載可能 = if, for などの制御文はかけない
    return <div>{greet(name)}</div>;
}

export default App;
