var n = 0;

if (true) {
    var n = 50;
    var m = 100;
    console.log(n);
}

// ブロックを抜けてもスコープが関数単位だから制御構文をすり抜ける
console.log(n); // 50
console.log(m); // 100
