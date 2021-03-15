{
    const multiply = (n, m) => n * m;
    console.log(multiply(2, 4)); // 8
}

{
    // n を引数に取った上で、 m を引数に取り n との積を返す
    // withMultiple(2) は multiply(2, m) となる
    // 関数として実行するには引数が二つ必要だから withMultiple(2)(4)
    const withMultiple = (n) => {
        return (m) => n * m;
    };
    console.log(withMultiple(2)(4)); // 8
}

{
    const withMultiple = (n) => (m) => n * m;
    console.log(withMultiple(2)(4)); //8
}
