import { FC } from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import '../Timer.css';

// limit は純粋にロジックでしか使われない変数のため props に含まれない
// JSX の中で使われているものだけを抽出する
type Props = {
    timeLeft?: number;
    isPrime?: boolean;
    reset?: () => void;
};

// presentational component
// 自らロジックを持たず、見た目だけで完結しているコンポーネント(このままスタイルガイドに載せることもできる)
const Timer: FC<Props> = ({
    timeLeft = 0,
    isPrime = false,
    reset = () => undefined,
}) => (
        <Card>
            <Statistic className="number-board">
                <Statistic.Label>time</Statistic.Label>
                <Statistic.Value
                    className={isPrime ? 'prime-number' : undefined}
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

export default Timer;