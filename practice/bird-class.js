class Bird {
    constructor(name){
        this.name = name;
    }

    // メソッドをアロー関数で書く
    chirp = () => {
        console.log(`${this.name} が鳴きました`);
    };

    static explain = (name) => {
        console.log(`${name} は翼があり、卵を生む`);
    };
}

class FlyableBird extends Bird {
    constructor(name){
        super(name);
    }

    fly = () => {
        console.log(`${this.name} が飛びました`);
    };
}

const penguin = new Bird('ペンギン'); 
penguin.chirp(); // ペンギン が鳴きました
Bird.explain('カラス'); // カラス は翼があり、卵を生む

const hawk = new FlyableBird('タカ');
hawk.fly(); // タカ が飛びました
