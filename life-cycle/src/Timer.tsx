import { FC, useEffect, useState } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import './Timer.css';

const Timer: FC<{ limit: number }> = ({ limit }) => {
    // state(timeLeft) とその更新関数を定義
    // timeLeft を props としてコンポーネント渡された limit の値により初期化
    const [timeLeft, setTimeLeft] = useState(limit);
    const reset = (): void => setTimeLeft(limit);
    const tick = (): void => setTimeLeft((t) => t - 1);

    // 第二引数に空の配列を渡しているので、初回レンダリング時のみ setInterval が実行
    // componentDidMount は 仮想DOM からリアルDOM に変換する前に、ブラウザへの表示をブロックし、同期的な処理が終わるまでコンポーネント部分には何も表示されない
    // useEffect ではコンポーネントはまず初期値でレンダリングされた後に、改めて副作用が反映された内容で再レンダリングされる
    // →副作用の処理がコンポーネントの表示をブロックしないため、レスポンス性を高めてアプリケーション全体のUXの向上につながる
    useEffect(() => {
        const timerId = setInterval(tick, 1000);

        // コンポーネントのアンマウント時に clearInterval() の実行関数を実行
        return () => clearInterval(timerId);
    }, []);

    // 残り時間が 0 になったら 再度 limit の値を設定
    useEffect(() => {
        // リセットの判断基準に state 変数(timeLeft) 、値の再設定に props である limit を使用
        // つまり、 timeLeft か limit が変更された後でないと実行する意味がない(= 依存配列を指定)
        if (timeLeft === 0) setTimeLeft(limit);

        // 依存配列を指定
        // 配列に格納された変数がひとつでも前のレンダリングと比較して差分があったときだけ、第一引数の関数が実行される
    }, [timeLeft, limit]);

    return (
        <Card>
            <Statistic className="number-board">
                <Statistic.Label>time</Statistic.Label>
                <Statistic.Value>{timeLeft}</Statistic.Value>
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
