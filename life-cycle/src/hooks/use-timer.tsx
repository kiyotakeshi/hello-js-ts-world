import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getPrimes } from '../utils/math-tool';

const useTimer = (limit: number): [number, boolean, () => void] => {
    const [timeLeft, setTimeLeft] = useState(limit);

    // useMemo を使い、計算結果をコンポーネントシステムの外に保存
    // primes には素数の配列が入る  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
    const primes = useMemo(() => getPrimes(limit), [limit]);

    // タイマーIDを保持することで limit が変更されたときにこのIDを使用してクリア処理を行う
    // 最初に渡せる値がないため、 setInterval 関数の戻り値 <NodeJS.Timeout> を型引数として与えている
    const timerId = useRef<NodeJS.Timeout>();

    const tick = () => setTimeLeft((t) => t - 1);

    // タイマーIDを使用してカウントダウンタスクをクリアする
    const clearTimer = () => {
        if (timerId.current) clearInterval(timerId.current);
    };

    // limit が変わった際に実行
    // useCallback は関数定義そのものをメモ化する
    // props である limit が変わったときだけ、 reset() が再定義される
    const reset = useCallback(() => {
        clearTimer();
        timerId.current = setInterval(tick, 1000);
        setTimeLeft(limit);
    }, [limit]);

    useEffect(() => {
        reset();

        // コンポーネントのアンマウント時に実行
        return clearTimer;
    }, [reset]);

    useEffect(() => {
        if (timeLeft === 0) reset();
    }, [timeLeft, reset]);

    return [
        timeLeft,
        primes.includes(timeLeft), // 素数か判定して boolean として返す(isPrime として受け取ってもらう)
        reset,
    ];
};

export default useTimer;
