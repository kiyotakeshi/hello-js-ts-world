class Person {
    constructor(name) {
        this.name = name;
    }

    // メソッド内で定義された関数はただの関数で、
    // Person の実行コンテキスト内にない
    // クラス構文は、 strict モードが有効のため、this へのアクセスで undefined になる
    // > this.name
    // undefined
    greet(){
        const doIt = function(){
            console.log(`hi, I'm ${this.name}`);
        };
        doIt();
    }
}

const minky = new Person('momo');
minky.greet(); // TypeError: Cannot read property 'name' of undefined
