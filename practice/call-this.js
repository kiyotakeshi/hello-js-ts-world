const Person = function(name) {
    this.name = name;

    return this;
};

// .call() というプロトタイプメソッドにより、 this を指定して関数を実行する
// { gender: 'm' } を this として渡す
const mike = Person.call({ gender: 'm' }, 'Mike');

// this は呼び出し側から渡される引数
console.log(mike); // { gender: 'm', name: 'Mike' }
