import { Component, ReactElement } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';
import './App.css';

// 型エイリアス
type State = { count: number };

// 型引数の1つ目は props の型で、このコンポーネントには props が必要ないため unknown を渡す
// 空オブジェクト {} は TypeScript の解釈だと null 以外のあらゆるオブジェクトになってしまうため
// 型引数の2つ目は state の型
class App extends Component<unknown, State> {
    // state の初期化にはコンストラクタが必要
    constructor(props: unknown) {
        // 親クラス React.Component のコンストラクタが呼ばれる
        super(props);

        // this が使えるようになる(JavaScript では親のコンストラクタを呼ぶまで this は使えない)
        // @see https://overreacted.io/ja/why-do-we-write-super-props/
        // state に値を設定(カウンター値を 0 に初期化)
        this.state = { count: 0 };
    }

    // reset(): void {
    //     // this.state の値を直接書き換えない(参照しかできない)
    //     this.setState({ count: 0 });
    // }

    // `TypeError: this.setState is not a function` を回避するためにアロー関数で記載する
    // 暗黙の引数としての this を持たず、 関数の外のスコープの this がそのまま使われる
    reset = (): void => {
        this.setState({ count: 0 });
    };

    increment = (): void => {
        // state の値の更新は React によるレンダリング最適化処理の中で非同期に行われるため、
        // increment() 参照する state の値は最新の値であることは保証されないため
        // state の前の状態に依存するような変更処理は関数で設定し
        // this.setState({ count: this.state.count +1 }) とは書かない
        this.setState((state) => ({ count: state.count + 1 }));
    }

    render(): ReactElement {
        const { count } = this.state;
        return (
            <div className="contianer">
                <header>
                    <h1>カウンター</h1>
                </header>
                <Card>
                    <Statistic className="number-board">
                        <Statistic.Label>count</Statistic.Label>
                        <Statistic.Value>{count}</Statistic.Value>
                    </Statistic>
                    <Card.Content>
                        <div className="ui two buttons">
                            {/* onClick(イベントハンドラ) に実行したい関数を設定 */}
                            {/* reset メソッドを実行する無名関数を設定 */}
                            <Button color="red" onClick={() => this.reset()}>
                                {/* アロー関数で定義していない場合、 this は実行時のオブジェクトである Button コンポーネントを差す */}
                                {/* Button クラスには setState() メソッドがないため実行時エラーとなる */}
                                {/* TypeError: this.setState is not a function */}
                                {/* <Button color="red" onClick={this.reset}> */}
                                Reset
                            </Button>
                            {/* Button コンポーネントから見て、親コンポーネントである App の state 内の count を加算する */}
                            {/* 子コンポーネントである Button が App の値を遡って直接書き換えることなく、*/}
                            {/* 単方向データフローを保ったまま、コールバック関数を介してその値を変更できる */}
                            <Button
                                color="green"
                                onClick={() => this.increment()}
                            >
                                +1
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        );
    }
}

export default App;
