// 素数を含んだ配列を生成する関数
export const getPrimes = (maxRange: number): number[] =>
    [...Array(maxRange + 1).keys()].slice(2).filter((n) => {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }

        return true;
    });
