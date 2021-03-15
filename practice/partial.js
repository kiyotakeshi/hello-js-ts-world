const withMultiple = (n) => (m) => n * m;
console.log(withMultiple(3)(5)); // 15

// multiply(3, m) にあたる
// どんな数を渡しても 3倍する関数として定義できる
// カリー化された関数の一部の引数を固定して新しい関数を作ることを、部分適用という
const triple = withMultiple(3);
console.log(triple(5)); // 15
