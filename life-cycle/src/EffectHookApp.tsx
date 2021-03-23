import { FC } from 'react';
// import Timer from './Timer';
import PrimeTimer from './PrimeTimer';
import './App.css';

const EffectHookApp: FC = () => (
    <div className="container">
        <header>
            <h1>タイマー</h1>
        </header>
        {/* <Timer limit={60} /> */}
        <PrimeTimer limit={60} />
    </div>
);

export default EffectHookApp;
