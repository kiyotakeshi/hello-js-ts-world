import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import { getPrimes } from './utils/math-tool';
import './Timer.css';

type TimeProps = {
    limit: number;
};

const Timer: FC<TimeProps> = ({ limit }) => {
    const [timeLeft, setTimeLeft] = useState(limit);

    // const primes = getPrimes(limit); と書くとカウントダウンで再レンダリングするたびに計算が繰り返し実行される
    // useMemo を使い、計算結果をコンポーネントシステムの外に保存
    // useEffect と同じインターフェースで依存配列に limit を渡す
    // primes には素数の配列が入る  [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]
    const primes = useMemo(() => getPrimes(limit), [limit]);

    // useRef によりあらゆる書き換え可能な値を保持できる
    // state と違い、再レンダリングを伴わずにデータを関数コンポーネントで保存しておきたい時に使用
    // タイマーIDを保持することで limit が変更されたときにこのIDを使用してクリア処理を行う
    // 最初に渡せる値がないため、 setInterval 関数の戻り値 <NodeJS.Timeout> を型引数として与えている
    const timerId = useRef<NodeJS.Timeout>();

    // 関数は値が同じなら同一のものとみなされるプリミティブ型の変数と違い
    // 内容が同じでも、定義ごとに指しているメモリのアドレスが異なるから、別物と判断される
    // const reset = (): void => setTimeLeft(limit);

    // useCallback は関数定義そのものをメモ化する
    // props である limit が変わったときだけ、 reset() が再定義される
    const reset = useCallback(() => setTimeLeft(limit), [limit]);

    const tick = (): void => setTimeLeft((t) => t - 1);

    // limit が変わった際に実行
    useEffect(() => {
        // タイマーIDを使用してカウントダウンタスクをクリアする
        const clearTimer = () => {
            if (timerId.current) clearInterval(timerId.current);
        };

        reset();
        clearTimer();

        // 新しいタイマーIDを timerID.current に格納
        timerId.current = setInterval(tick, 1000);

        // コンポーネントのアンマウント時に実行
        return clearTimer;
    }, [limit, reset]);

    useEffect(() => {
        // console.log('useEffect');
        // if (timeLeft === 0) setTimeLeft(limit);

        // reset 関数の定義は useEffect の外にある
        if (timeLeft === 0) reset();

        // 依存配列を指定
        // 配列に格納された変数がひとつでも前のレンダリングと比較して差分があったときだけ、第一引数の関数が実行される
        // }, [timeLeft, limit]);
    }, [timeLeft, reset]);

    return (
        <Card>
            <Statistic className="number-board">
                <Statistic.Label>time</Statistic.Label>
                <Statistic.Value
                    className={
                        primes.includes(timeLeft) ? 'prime-number' : undefined
                    }
                >
                    {timeLeft}
                </Statistic.Value>
            </Statistic>
            <Card.Content>
                <Button color="red" fluid onClick={reset}>
                    <Icon name="redo" />
                    Reset
                </Button>
            </Card.Content>
        </Card>
    );
};

export default Timer;
