class Person {
    constructor(name) {
        this.name = name;
    }

    greet1(){
        const doIt = function(){
            console.log(`hi, I'm ${this.name}`);
        };
        // Function.prototype.bind(arg) で arg に渡した値を　 this に固定した新しい関数を作る
        const bindedDoIt = doIt.bind(this); // 関数に this を束縛
        bindedDoIt();
    }

    greet2(){
        const doIt = function(){
            console.log(`hi, I'm ${this.name}`);
        };
        // Function.prototype.call(arg) で arg に渡した任意のオブジェクト this 日程して関数を呼び出す　
        doIt.call(this); // this を指定して実行
    }
    greet3(){
        const _this = this; // _this に値を差し替える
        const doIt = function(){
            console.log(`hi, I'm ${_this.name}`);
        };
        doIt();
    }

    // アロー関数だと this を参照すると関数の外のスコープの this がそのまま使われる
    // 何の対策もせず this を使うと、 this がグローバルオブジェクトになりエラーを引き起こすため、アロー関数で書く
    greet4(){
        // アロー関数で定義
        const doIt = () => {
            console.log(`hi, I'm ${this.name}`);
        };
        doIt();
    }

    // メソッドもアロー関数で定義
    greet5 = () => {
        const doIt = () => {
            console.log(`hi, I'm ${this.name}`);
        };
        doIt();
    }
}

const minky = new Person('momo');
minky.greet1(); 
minky.greet2(); 
minky.greet3(); 
minky.greet4(); 
minky.greet5(); 
