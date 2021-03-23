import { FC, useCallback, useEffect, useMemo, useState } from 'react';
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

    // 関数は値が同じなら同一のものとみなされるプリミティブ型の変数と違い
    // 内容が同じでも、定義ごとに指しているメモリのアドレスが異なるから、別物と判断される
    // const reset = (): void => setTimeLeft(limit);

    // useCallback は関数定義そのものをメモ化する
    // props である limit が変わったときだけ、 reset() が再定義される
    const reset = useCallback(() => setTimeLeft(limit), [limit]);

    const tick = (): void => setTimeLeft((t) => t - 1);

    // 第二引数に空の配列を渡しているので、初回レンダリング時のみ setInterval が実行
    useEffect(() => {
        // TODO: limit が変わった際に、残り時間をリセットした上で以前のカウントダウンタスクをクリアする
        const timerId = setInterval(tick, 1000);

        // コンポーネントのアンマウント時に clearInterval() の実行関数を実行
        return () => clearInterval(timerId);
    }, []);

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
