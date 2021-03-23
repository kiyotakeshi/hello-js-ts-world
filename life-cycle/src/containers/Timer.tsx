import { FC } from 'react';
import useTimer from '../hooks/use-timer';
import Timer from '../components/Timer';

// container component
// presentation component をインポートし、 Cumstom Hook(useTimer) とつなげる
const EnhancedTimer: FC<{ limit: number }> = ({ limit }) => {
    // オブジェクトで返して分割代入で受け取ることも可能
    // const {timeLeft, isPrime, reset} = useTimer(limit);
    const [timeLeft, isPrime, reset] = useTimer(limit);

    return <Timer timeLeft={timeLeft} isPrime={isPrime} reset={reset} />;
};

export default EnhancedTimer;
