import { Component, ReactElement } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import './App.css';

const LIMIT = 60;
type State = { timeLeft: number };

class App extends Component<unknown, State> {
    timerId: NodeJS.Timer | null = null;

    constructor(props: unknown) {
        super(props);
        this.state = { timeLeft: LIMIT };
    }

    // コンポーネントが最初にマウントされた直後に呼ばれた時に実行されるライフサイクルメソッド
    componentDidMount = (): void => {
        // setInterval は JavaScript 組み込み関数で第一引数の関数を第二引数のmsごとに実行
        // 1秒ごとに tick メソッドを実行
        this.timerId = setInterval(this.tick, 1000);
    };

    // コンポーネントが変更された直後に呼ばれるライフサイクルメソッド
    // timeLeft が0になったら reset メソッドを実行
    componentDidUpdate = (): void => {
        const { timeLeft } = this.state;
        if (timeLeft === 0) this.reset();
    };

    // コンポーネントがアンマウントされる直前に呼ばれるライフサイクルメソッド
    componentWillUnmount = (): void => {
        // setInterval() 関数は戻り値にユニークなインターバルIDを返す
        // そのIDを指定して clearInterval() を実行することでタイマーのタスクをキャンセルする
        if (this.timerId) clearInterval(this.timerId);
    };

    tick = (): void =>
        this.setState((prevStete) => ({ timeLeft: prevStete.timeLeft - 1 }));

    reset = (): void => this.setState({ timeLeft: LIMIT });

    render = (): ReactElement => {
        const { timeLeft } = this.state;
        return (
            <div className="container">
                <header>
                    <h1>タイマー</h1>
                </header>
                <Card>
                    <Statistic className="number-board">
                        <Statistic.Label>time</Statistic.Label>
                        <Statistic.Value>{timeLeft}</Statistic.Value>
                    </Statistic>
                    <Card.Content>
                        <Button color="red" fluid onClick={this.reset}>
                            <Icon name="redo">Reset</Icon>
                        </Button>
                    </Card.Content>
                </Card>
            </div>
        );
    };
}

export default App;
