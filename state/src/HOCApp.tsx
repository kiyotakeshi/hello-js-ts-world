import { FC, Component, ReactElement } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './App.css';

type InjectedProps = {
    count: number;
    reset: () => void;
    increment: () => void;
};
type Props = { max: number };
type State = { count: number };

// HOC
// CounterComponent を引数に取る
const withCounter = (WrappedComponent: FC<Props & Partial<InjectedProps>>) =>
    // 必要な state やロジックのためのメンバーメソッドを持つクラスコンポーネントを生成
    class EnhancedComponent extends Component<Props, State> {
        constructor(props: Props) {
            super(props);
            this.state = { count: 0 };
        }

        reset = (): void => this.setState({ count: 0 });

        increment = (): void =>
            this.setState((state) => ({ count: state.count + 1 }));

        componentDidUpdate = (): void => {
            if (this.state.count > this.props.max) this.reset();
        };

        // withCounter が引数として受け取ったコンポーネントに props として
        // state やロジックのためのメンバーメソッドを渡す
        render = (): ReactElement => (
            <WrappedComponent
                max={this.props.max}
                count={this.state.count}
                reset={this.reset}
                increment={this.increment}
            />
        );
    };

// 状態をやロジックを持たない presentational component
// CounterComponent を JSX からマウントする際に必要な props は max だけだが、
// HOC により count, reset, increment にロジックを注入できるようにする必要があるので
// 3つを組み込みユーティリティ型の Partial で省略可能にして合成している
const CounterComponent: FC<Props & Partial<InjectedProps>> = ({
    max,
    count = 0,
    reset = () => undefined,
    increment = () => undefined,
}) => (
    <div>
        <div>
            {count} / {max}
        </div>
        <button onClick={reset} type="button">
            Reset
        </button>
        <button onClick={increment} type="button">
            +1
        </button>
    </div>
);

export default withCounter(CounterComponent);
