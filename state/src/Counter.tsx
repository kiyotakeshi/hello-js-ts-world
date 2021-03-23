import { FC, useState } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './Counter.css';

const Counter: FC = () => {
    // クラスコンポーネントの state に相当する機能を useState 関数により設定
    // state 変数(count) と、その更新関数(setCount) を分割代入
    // 初期値として 0 を渡す
    // Hooks の呼び出しは関数コンポーネントの論理階層のトップレベルでなければいけない(条件文や繰り返し処理の中で呼び出さない)
    const [count, setCount] = useState(0);

    // const increment = () => setCount(count + 1); とは書かないほうがいい(以下の plusThreeDirectly を参照)
    const increment = () => setCount((c) => c + 1);

    const reset = () => setCount(0);

    // setCount を3回実行
    // state 変数(count) を相対的に変更する処理を行う時は、前の値を直接参照や変更しない
    // クラスコンポーネントの this.state には常に最新の値が入っているが、 State Hook ではレンダリングごとに state 変数は一定
    const plusThreeWithFunction = () =>
        [0, 1, 2].forEach((_) => setCount((c) => c + 1));

    // 1 しか加算されない
    // state 変数(count) はコンポーネントのレンダリングごとで一定のため、
    // plusThreeDirectly のレンダリング時点での count が 0 なら、
    // それを 1 に上書きする処理を3回繰り返すので、関数終了時点の count は 1
    const plusThreeDirectly = () =>
        [0, 1, 2].forEach((_) => setCount(count + 1));

    return (
        <Card>
            <Statistic className="number-board">
                <Statistic.Label>count</Statistic.Label>
                <Statistic.Value>{count}</Statistic.Value>
            </Statistic>
            <Card.Content>
                <div className="ui three buttons">
                    <Button color="red" onClick={reset}>
                        Reset
                    </Button>
                    <Button color="green" onClick={increment}>
                        +1
                    </Button>
                    <Button color="yellow" onClick={plusThreeWithFunction}>
                        +3
                    </Button>
                    {/* <Button color="yellow" onClick={plusThreeDirectly}>+3</Button> */}
                </div>
            </Card.Content>
        </Card>
    );
};

export default Counter;
