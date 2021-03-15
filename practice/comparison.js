// Procedural programming
// 最初は空配列である octuples に要素を一つずつ追加していく
{
    const octuples = [];

    // n に100回再代入
    for (let n = 1; n < 101; n++) {
        if (n % 8 === 0) {
            // octuples に12回破壊的変更がある
            octuples.push(n);
        }
    }

    console.log(octuples);
}

// Functional programing
// 1 ~ 100 の整数配列を作った上で、8で割り切れるものだけ抜き出す
{
    const range = (start, end) =>
        [...new Array(end - start).keys()].map((n) => n + start);
    console.log(range(1, 101).filter((n) => n % 8 === 0));
}
