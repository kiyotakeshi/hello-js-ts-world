function Bird(name) {
    this.name = name;

    this.chirp = function() {
        console.log(`${this.name} が鳴きました`);
    }
    return this;
}

Bird.explain = function(name){
    console.log(`${name} は翼があり、卵を生む`);
};

function FlyableBird(name){
    Bird.call(this, name);
    this.fly = function() {
        console.log(`${this.name} が飛びました`);
    }
    return this;
}

FlyableBird.prototype.__proto__=Bird.prototype;

const penguin = new Bird('ペンギン'); 
penguin.chirp(); // ペンギン が鳴きました
Bird.explain('カラス'); // カラス は翼があり、卵を生む

const hawk = new FlyableBird('タカ');
hawk.fly(); // タカ が飛びました