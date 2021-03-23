## setup anyenv && nodenv

```shell
brew install anyenv

echo 'eval "$(anyenv init -)"' >> ~/.zshrc

exec $SHELL -l

anyenv install --init

anyenv install nodenv

exec $SHELL -
```

```shell
mkdir -p $(anyenv root)/plugins

git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-updat

mkdir -p "$(nodenv root)"/plugins

git clone https://github.com/nodenv/nodenv-default-packages.git "$(nodenv root)/plugins/nodenv-default-packages"

touch $(nodenv root)/default-packages

$ \cat $(nodenv root)/default-packages
yarn
typescript
ts-node
typesync
```

```shell
nodenv install -l

nodenv install 14.4.0

nodenv global 14.4.0
```
---

```shell
npx create-react-app hello-world --template typescript
```

---
- Vue は MVVM
  - Model - View - ViewModel からなる構成
  - HTML テンプレートに処理内容を埋め込む

- Node.js は JavaScript をブラウザ以外で動かすために開発
    - Chrome 用の V8 エンジンを使用
    - JS をサーバサイド言語として使えるようになる

- React のライブラリをスクリプトファイルとして読みこむと、React をブラウザだけで動かすことは可能
    - パッケージのインストールとライブラリの依存関係の管理を手動で行うのが現実的でないため不可能

- npm によりパッケージのインストールとライブラリの依存関係の管理を行う
    - Ruby だと gem, Bundler(gem同士の依存関係とバージョンの生合成を管理) が担う
    - Node.js のためのパッケージ管理システムだったが、フロントエンドのパッケージの提供にも用いられるようなった

- フロントエンド開発に Node.js が必要な理由
    - バンドル(パフォーマンス最適化のために、 JS,CSS ファイルをまとめる, 動作する上で不要なコードを削除する = minfy)
    - ブラウザ実行時ではなく、最初から polyfill(古いブラウザで実行できるようにコードを変換)してくれる
    - 開発用の HTTP サーバを起動してそれ経由でアプリを稼働させる
    - テストツールを用いてユニットテストを記載

- `nodenv local 14.4.0` と実行すると、 .node-version が作られ、そのディレクトリの Node のバージョンが固定される

- yarn は Facebook 製の改良版 npm コマンド
    - npm より高速、サブコマンドのタイプ数が少ない

- 対話型の実行環境 = REPL(Read,Eval,Print,Loop)

- react-dom
    - DOM を仮想化して React から操作できるようにするレンダラーのパッケージ

- react-script
    - Babel
    - webpack
        - コンパイラと連携してソースコードを一つにまとめて最適化する
    - webpack-dev-server
        - ファイルの変更を自動検知して再ビルド、リロードする開発用の HTTP サーバの稼働

- npx コマンドは npm パッケージで提供されているコマンドの最新版を取ってきて実行し、終わったら削除するコマンド

```shell
npx create-react-app hello-world --template typescript
```

- yarn.lock(package-lock.json) はパッケージの依存関係とどのバージョンがインストールされたかを記録
    - git で管理する
    - 動いている時のロックファイルは残しておく

- npm-scripts により npm コマンドや yarn コマンドのように処理コマンドを実行できる
    - node_modules/.bin ディレクトリにパスが通されている

```shell
$ grep 'scripts' ./package.json
    "react-scripts": "4.0.3",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

./node_modules/.bin/react-scripts start
```

- yarn build すると build ディレクトリにビルド済みファイルが展開される

---
- var は使わない

再宣言できてしまう。

```
> var a = 1;
undefined
> a
1
> var a = 3;
undefined
> a
3
```

[巻き上げ(hoisting)](practice/hoisting.js)。

[スコープがブロックでなく関数](practice/scope.js)。

- const, let を使う

---
- 動的型付け言語なので、異なるデータ型の値を入れ直すことができる

```
> let val = 100;
undefined
> val = 'foo';
'foo'
```

- Undefined 型
    - プリミティブ値(String,Nuber,Boolean など)の一種
    - 宣言のみが行われた変数や、オブジェクト内の存在しないプロパティへのアクセスに割り当てられる
    - null とは明確に区別される

- プリミティブ値とラッパーオブジェクトは等価にはならない
    - ラッパーオブジェクトである String に備わっている、 valueOf() メソッドが返す値がプリミティブ値に対応

```
> const s1 = 'String';
undefined
> const s2 = new String('String');
undefined
> s1 === s2
false
> s1 === s2.valueOf();
true
```

- プリミティブ型の値にアクセスすると、対応するラッパーオブジェクトに自動変換される

```
> 'Primitive technology'.replace('Primitive', 'High');
'High technology'

> (new String('Primitive technology')).replace('Primitive', 'High');
'High technology'
```

- すべてのオブジェクトは Object を継承元に持つ
    - __proto__ はオブジェクトが何を下敷きにしてインスタンスとして生成された化が格納されている

```
> array
[ 1, 2, 3 ]
> array.__proto__.constructor.name
'Array'
> array.__proto__.__proto__.constructor.name
'Object'
```

- 文(statement)
    - 何かしらの手続きを処理系に命令するもの
    - 変数に代入できないもの
    - JS では if は statement

```
> const rand = Math.floor(Math.random() * 10);
undefined
> const judge = if (rand % 2 === 0) `even` else `odd`;
const judge = if (rand % 2 === 0) `even` else `odd`;
```

- 式(expression)
    - 評価された後に値として存在するもの
    - 変数に代入できるもの
    - 参考演算子による評価は式のため変数に代入できる　
        - Haskell, Scala などの関数型言語は if が式

```
> const judge = rand % 2 === 0 ? `even` : `odd`;
undefined
> judge
'odd'
```

- JS では関数は式としても文としても定義可能

```js
// statement
function double(n) {
    return n * 2;
}

// expression
const twice = function(n) {
    return n * 2;
};
```

- [再代入や宣言の巻き上げができししまう](practice/fn-statement.js) ので、 expression を使うほうがいい

```js
console.log(fu());

function fn(){
    return `foo`;
}

function fn(){
    return 'bar';
}
```

- 関数も Fuction オブジェクトのインスタンスに過ぎず、 Object を祖先に持っている
    - 関数は、 第一級オブジェクト (First-Class Object) である
        - 他のオブジェクト型の値と同様に扱える
            - 変数へ代入したり
            - 配列の要素やオブジェクトのプロパティ値にしたり
            - 引数として渡したり
            - 戻り値として設定したり
        - Ruby,Java にはない性質
        - 関数を第一級オブジェクトとして扱うことができるプログラミング言語の特性を `第一級関数` という

```
> const fn = function(){};
undefined
> fn.__proto__.constructor.name
'Function'
> fn.__proto__.__proto__.constructor.name
'Object'
> 
```

- 関数式は Function オブジェクトを生成するリテラルである
    - String のリテラルは '' で囲む
    - sum,add は同じ働きをする関数
        - sum の書き方は関数が常にグローバルスコープになるため使わない　

```
> const sum = new Function('n', 'm', 'return n + m;');
> const add = function(n,m){ return n + m; };
```

- オブジェクトのプロパティとなっている関数のことをメソッドと呼ぶ

```js
const foo = {
    bar: 'bar',
    // baz: function() {
    //     console.log('this is `baz` method');
    // },

    // こちらの書き方の方が一般的　
    baz() {
        console.log('this is `baz` method');
    }
};

foo.baz()
```

- [アロー関数](practice/arrow-sample.js)

- 無名関数
    - 定義時に名前を与えられれない関数
    - メモリに残らず、変数に代入されなければ定義した端から消滅する

```
> (() => {}).name
''
```

- 変数の名前が関数の名前になる
    - 無名関数を生成した上で、それを変数に代入することでメモリ上に残している

```
> const venus = function() { console.log('i am venus'); };
> venus()
i am venus

> venus.name
'venus'
```

- デフォルト引数
    - デフォルト値の設定がある引数は後ろから置いておく
    - `関数の設計として重要な引数ほど前に持ってくるべきで、デフォルト値が設定でき、省略できる引数は重要性が低い`

```
> const raise = (n, m = 2) => n ** m;
> console.log(raise(2,3));
8

// 第二引数はデフォ値の 2 が使われる
> console.log(raise(3));
9
```

- Rest Parameters
    - [残りの引数を配列として受け取る](practice/rest-params.js)
    - [第一引数にレストパラメータを利用すれば、可変長引数にできる](practice/rest-all-params.js)
    - [スプレッド構文と併用して、名前をつけてレストパラメータを取得](practice/rest-destruct.js) 
        - 溢れた分は捨てられる

---
- [クラス](practice/bird-class.js)
    - クラスを作っているように見せかかけている、シンタックスシュガー
        - 実際はコンストラクタ関数
            - それぞれに設定されているプロトタイプオブジェクトを継承して、新しくオブジェクトインスタンスを生成するための関数
        - プロトタイプオブジェクトを継承してオブジェクトインスタンスを生成するための独立した関数
            - クラスベースは実体を持たない抽象概念
            - プロトタイプベースは他のオブジェクトを継承しており継承元のオブジェクトが、プロトタイプ

```
> .load practice/bird-class.js
> typeof Bird
'function'
> typeof FlyableBird
'function'
```

- 各オブジェクトのプロトタイプが __prote__ プロパティに格納されている　

```
> [1,2,3].__proto__
[]
> {foo:'bar'}.__proto__
{}
> 'String'.__proto__
[String: '']
> (123).__proto__
[Number: 0]
```

- ラッパーオブジェクト値が使えるメソッドは、そのオブジェクトの継承元であるプロトタイプが持っているメソッドを継承したもの
    - プロトタイプメソッドと呼ばれる

```
> Number.prototype.toString();
'0'
> (100).toString(); // Number.prototype.toString() を継承
'100'

> String.prototype.replace('', 'black');
'black'
> 'LiveScript'.replace('Live', 'Java');  // String.prototype.replace() を継承
'JavaScript'
```

- オブジェクトは何かしらのプロトタイプを継承し、プロトタイプチェーンは {} を経て null に到達する

```
> .load practice/bird-class.js
> hawk.__proto__
FlyableBird {}
> hawk.__proto__.__proto__
Bird {}
> hawk.__proto__.__proto__.__proto__
{}
> hawk.__proto__.__proto__.__proto__.proto__
undefined // null じゃないが深追いしない
```

- プロトタイプにメソッドを追加すると、継承先でも使えるようになる

```js
> hawk.toString();
'[object Object]'

// Bird のプロトタイプにメソッドを追加
> Bird.prototype.toString = function() { return `Bird { name: ${this.name} }`; };
[Function (anonymous)]

> hawk.toString();
'Bird { name: タカ }'

// メソッドを削除
> delete Bird.prototype.toString;
true

> hawk.toString();
'[object Object]'
```

- [クラス構文をプロトタイプベースに書き直す](practice/bird-proto.js)

---
- [配列やオブジェクトの中身を動的に設定する](practice/shorthand.js)

- [分割代入](practice/destructure.js)

- [分割代入2](practice/destructure2.js)

- [スプレッド構文](practice/spread.js)

- [スプレッド構文と分割代入の組み合わせ](practice/spread-destructure.js)

- [オブジェクトのコピー](practice/spread-copy.js)

- [シャローコピーに注意する](practice/shallow-copy.js)

---
- 関数型プログラミングは、先行する式の評価を後続の指揮に適用し、最終的な評価値に至る式のツリーを記述してプログラムを組み立てる
    - React 開発においては、手続きを書き連ねるスタイルより、関数型のスタイルが好まれる

- [ショートサーキット評価](practice/short-circuit.js)

- [Nullish Coalescing(コアレッシング) と Optional Chaining](practice/nullish-coalescing.js)
    - ES2020 で導入された書き方、 TypeScript 3.7 以降で使用可能

- [this は呼び出し側から渡される引数](practice/call-this.js)

- this はグローバルオブジェクトを指す
    - Node.js なら global オブジェクト
    - ブラウザなら Window オブジェクト

- this はグローバル変数だからメソッドにも関数にもないが参照できる
    - モジュールシステムがなかった初期の JavaScript では全ての変数や関数はグローバル名前空間に展開されて、常にどこからでも参照できた

```
> this
<ref *1> Object [global] {
  global: [Circular *1],
```

```
this
Window {window: Window, self: Window, document: document, name: "", location: Location, …}
```

- new 演算子をつけずに実行したため、グルーバルオブジェクトの this に name プロパティが追加された
    - 簡単にグローバル汚染が起きてしまうため、 Strict モードが追加された
        - `use strct` をファイルや関数の最初に追加する

```
> const Person = function (name) { this.name = name; return this; };
undefined

> Person('somebody');
<ref *1> Object [global] {
  global: [Circular *1],
  (略)
  name: 'somebody'
}
```

- ES2015 からクラス構文において strict モードは有効になっている

```
> class Foo { constructor() { console.log('`this` is', this); } }
undefined
> Foo();
Uncaught TypeError: Class constructor Foo cannot be invoked without 'new'
> new Foo();
`this` is Foo {}
```

- [クラス内の this で undefined になる](practice/nested-this.js)
    - [解決策](practice/this-solutions.js)

---
- JavaScript には長らく他のファイルを読み込むためのモジュールシステムがなかった
    - ファイルを分割する場合は、 <script src=""> タグでスクリプトファイルとして読み込む
    - ロードしたものはフラットにグローバル空間に展開されてしまう

- 2009年の Node.js の登場時に、サーバサイド言語としての体裁を整えるために、 CommonJS という標準APIが策定
    - ライブラリ作成者がパッケージを提供できるようになった
    - パッケージ管理システムとして npm と公式リポジトリも構築された

- 2011年に Browserify が出てきて、npm パッケージをブラウザの JavaScript でも使えるようにした
    - モジュール間の依存関係を解決しつつファイルをまとめる、モジュールバンドラとして使われるように

- フロントエンドの開発が大規模化するにつれ、モジュールの読み込みが同期的であると問題に
    - メモリやディスクから読むサーバサイドと違い、ネットワークのオーバヘッドを意識する必要がある
    - AMD(Asynchronous Module Definition) という仕様と RequireJS というモジュールローダが登場

- ES6 にてモジュールシステムが盛り込まれた = ES Modules
    - 同期、非同期のローディングをサポート
    - import,export 記法を用意

- Create React App は ES Module の構文を利用
    - HTML のソースを見ると script モードで動いている
    - モジュールバンドラである webpack によるもの

- webpack は ES Modules, CommonJS, AMD を含めたモジュール構文をサポート
    - npm パッケージのほとんどは CommonJS 形式で提供されている(React も)が、 import 構文が使えるのは、 webpack のおかげ

- Babel Loader 経由で、 最新の JavaScript や JSX, TypeScript もコンパイルされバンドルされる

- webpack により ES Modules の構文がエミュレートされ、 Create React App により隠蔽され、 import,export ができる

- Deno 
    - 新世代の JavaScript ランタイム環境
    - Node.js の作者が、Node.js の初期設計のミスを反省し、一から作り直した
    - 同じくV8エンジンを採用
    - セキュリティがより高い
    - TypeScript, JSX を直接実行できる
    - npm によらない、URLベースのパッケージ管理機能を採用

- ES Module に統一されても、バンドラはなくらない
    - ブラウザに ES Modules をネイティブ実行させると、1回のリクエストに対して無数の js ファイルの読み込みが発生する
    - モジュールの依存関係の解決以外にもやっていることがあるから
        - Minify(空白文字、コメント、コンソール出力などを削除、変数や関数名を短縮)
    - Tree Shaking(参照されていないモジュールをバンドル対象から外し、出力ファイルの容量を削減)
    - キャッシュ管理(ビルド時にユニークなIDを付与し、ブラウザのキャッシュが残ることによる不具合をなくす)

- バンドラ、Typescript のコンパイラにより最適化されたコードは JavaScript エンジンにとって解釈しやすいものになりパフォーマンスが上がる
    - ネイティブアプリのビルドと遜色ない作業で、ビルド先がバイナリかテキストコードかの違い

---
- 関数型プログラミングの関数は、数学の関数と同じもの
    - *同じ入力に対して同じ作用と同じ出力が保証されている*
        - *参照透過性*と呼ばれる

- 参照透過的な関数を組み合わせて解決すべき問題に対処する、宣言型のプログラミングのスタイル

- プログラミングのパラダイム
    - 命令型プログラミング(Imperative Programming) と 宣言型プログラミング(Declarative Programming) に大別される
        - *命令型は、最終的な出力を得るために、状態を変化させる連続した文によって記述される*
            - ステップ順に指示をたどると料理が出来上がるレシピと同じ
            - 命令型に分類されるパラダイムが、 *手続き型(Procedural)* と *オブジェクト指向(Object-Oriented)*
        - *宣言型は、出力の性質、あるべき状態を宣言することでプログラムを構成する*
            - SQL がもっとも有名な宣言型プログラミング言語
                - どのようにデータベースにアクセスしてデータを取得するかという手続きでなく、*どんなデータが欲しいかを宣言することで出力を得る*
            - 宣言型で複雑な処理を行うための解が関数型プログラミング
                - 出力のあるべき状態を数学的に定義

- [手続き型と関数型で同じ結果を書く](practice/comparison.js)

- 関数型で書いた方は変数に一度も再代入や破壊的変更が起きない
    - immutability(不変性)を守ることでプログラムから副作用が排除される
        - 副作用とは、あるリソースの変更がアウトプットに影響を与えたり、参照透過性を壊してしまうこと

- 関数型では最初から完成を見据えた形で大雑把なところから絞り込んでいく
    - 1 ~ 100 の整数配列を作り、8で割り切れるものを抜き出す

- [コレクションの反復処理(Array オブジェクトのプロトタイプメソッドを使用)](practice/array-iterate.js)

- [reduce,sort](practice/array-iterate2.js)

- [includs](practice/includes.js)

- [オブジェクトの反復処理](practice/object-iterate.js)

---
- map() は対象の配列の要素一つ一つを任意に加工した新しい配列を返す
    - 関数に別の関数を引数として渡す
    - **JavaScript では関数は第一級オブジェクト**
        - **変数への代入ができ、配列の要素やオブジェクトのプロパティ、関数の引数や戻り値になることができるオブジェクト**
        - 厳密には、JavaScript は関数型言語に分類されないが、この性質が関数型プログラミングを支える

```
> const double = (n) => n * 2;
> [1,2,3].map(double);
[ 2, 4, 6 ]
```

- `map((n) => n * 2)` も map() に対してアロー関数による無名関数を渡している

- [高階関数(Higher Order Function)](practice/greeter.js)
    - 引数に関数を取ったり、戻り値として関数を返したりする関数のこと
    - **コールバックはこの引数として渡される関数のこと**

- [カリー化](practice/curried.js)
    - 複数の引数を取る関数をより少ない引数を取る関数に分割して入れ子にすること

- [カリー化された関数の部分適用](practice/partial.js)
    - カリー化された関数の一部の引数を固定して新しい関数を作ること

- クロージャー
    - 関数を関数で閉じて包む

- 閉じられていない場合
    -  グローバル変数である count に依存している
    - グローバル変数はどこからも参照でき書き換えができる
    - *increment関数は参照透過的ではなく、挙動が予測不能な関数となる*

```
let count = 0;

const increment = () => {
    return count++;
};
```

```
> .load practice/open-counter.js
> count
0
> increment()
> increment()
> count
2
```

- increment を丸ごと関数の中に入れる
    - 閉じ込めている外側の関数 counter はエンクロージャとも呼ばれる
    - count は内側の関数の引数でもなく、 increment() 自身のローカル変数でもない
    - count は自由変数と呼ばれる
        - 高水準言語である JavaScript では不要になったメモリ領域を解放する処理は GC(Garbage Collector) が行う
        - GC はカレントスコープと [他から参照されているものは解放しない](practice/orange.js)

- 自由変数を参照する内側の関数 increment() がエンクロージャにより返されて外のスコープで生きているので count も GC に回収されていない

- *クロージャは必ず内側の関数を返す必要はない、外のスコープの自由変数を参照する関数を関数で包んだ状態を差す*

```
const counter = () => {
    let count = 0;

    const increment = () => {
        return count++;
    };

    return increment;
};
```

```
> .load practice/closure-counter.js

> const increment = counter();

> increment()
0
> increment()
1
```

- 最終的な完成形

```
> const counter = (count = 0) => (adds = 1) => count += adds;
> const increment = counter();
> increment();
1
> increment();
2
> increment(2);
4

> const incrementFrom1 = counter(1);
> incrementFrom1();
2
> incrementFrom1(2);
4
```

- Promise
    - ES2015から導入された標準組み込みオブジェクト
    - 非同期処理の最終的な処理結果の値を約束するもの
    - 任意の非同期処理の完了を待って次の処理を行うことができるようになった

- Promise 登場以前(Callback Hell)
    - foo.txt -> bar.txt -> baz.txt と順に読み込む場合
    - コールバックを使わずに同じ階層に書くと、読み込みが終わったものから順番の保証なく表示されてしまう

```
fs.readfile('foo.txt', (err, data) => {
    console.log('foo:', data);
    fs.readfile('bar.txt', (err, data) => {
        console.log('bar:', data);
        fs.readfile('baz.txt', (err, data) => {
            console.log('baz:', data);
        });
    });
});
```

- [Promise を作って使う](practice/promise.js)

- [Promise のハンドリング](practice/async/get-user-then.js)
    - 非同期処理を扱うライブラリは Promise オブジェクトで値を返す

- [async, await を使って書き直す](practice/async/get-user-await.js)
    - await 演算子が使えるのは非同期関数の中だけ
    - TypeScript だと Top-Level await という非同期関数でなくても await がつかえる機能が提供

---
- TypeScript がメジャーになった要因
    - 静的型付け、型推論、Null安全性 というトレンドを抑えつつ、JavaScriptと同じ構文であるところ
    - Go,Rust,Kotlin,Swift もこれらの要素を備えている

- Ruby,Python,PHP といった LL(Lightweight Language) にカテゴライズされる動的型付け言語のチーム開発が大規模化していき、TDDが重要視されていった
    - 静的な型チェックがない分、メソッドの引数や返り値の型検証をテストで保証する必要があった

- 新たな言語は型推論により、プログラマが型を書かなくても言語処理系が文脈から予測してくれるように

- Null安全性も備え、コンパイル時に null アクセスエラーになる可能性のあるコードをチェック

- 静的片付け言語はIDEとの相性もいい
    - コンパイルしなくても、リアルタイムで問題を指摘
    - 前後の文脈から型が絞られることで、入力補完のサジェストの精度も高まる

---

- JSX は ReactElement オブジェクトを生成するシンタックスシュガーで構文のベースは JavaScript

- HTML のように書いた <div> などは、 React の組み込みコンポーネントに変換される

- 属性値や小要素はコンポーネントの props という関数の引数ようなもので渡される

---

- linter はコードを静的解析しコンパイルではじかれない潜在的なバグを警告する

- JSON を普及させた Crockford が開発した JSLint は適用ルールのon/offができずコミュニティとの確執が生まれてきた
    - forkして開発された JSHint は柔軟に使えて広がっていった

- ESLint は開発者が独自の lint ルールを作れる拡張を前提としたツールで利用者を急激に増やした
    - ドキュメントの充実
    - 読みやすく柔軟に記述できる設定ファイル
    - JSCS という別のツールも取り込まれた
    - TSLint も取り込まれた

- ESLint の設定をする
    - Parser
        - ソースコードを特定の言語使用に沿って解析してくれるライブラリ、TypeScript 用のものを使う
        - @typescript-eslint/parser
    - Plugin
        - ESLint 組込のルール以外の独自ルールを追加
        - @typescirpt-eslint/eslint-plugin
    - Shareable Config
        - 複数のルールの適用をまとめて設定、 Airbnb が提供する eslint-config-airbnb などが有名

---
- 2005年、Google Map が HTML と JavaScript で快適なUXを実現した
    - 非同期通信しながら動的にページを書き換える Ajax(Asynchronous JavaScript + XML) の時代の到来

- 同じ年に、 prototype.js が、翌年には jQuery が登場
    - jQuery は DOM 操作にブラウザ依存をなくした独自のセレクタエンジンを採用
        - ブラウザ間の JavaScript の実装の差異を吸収しライブラリとしての圧倒的地位を築く
    - DOM 操作ライブラリを主軸とした、明確なアーキテクチャを持たないユーティリティライブラリ群の詰め合わせという特徴
        - *既存の HTML をベースに一部を動的に書き換えるという形式*

- 2014年に HTML5 の使用が固まり Flash の時代が終わる

- 2008年に V8 がオープンソース化
    - 翌年に Node.js がリリース

- jQuery でつくるとアーキテクチャが存在しないため、誰もメンテナンスできない泥団子になってしまう
    - 2010年後半に Backbone.js, Knockout, AngularJS が登場し、MVC をクライアントサイドで適用
        - Knocknout は HTML テンプレートとそれに対するデータバインディング機能をもつ MVVM(Model-View-View Model) パターンで Vue.js に影響を与える
        - AngularJS は HTML テンプレートに加え、ルーティング機能やモジュールシステムを備えたフルスタックのフレームワークで Google 製のため2012年は最も人気

- AngularJS と Angular は別物、互換性の無いバージョン2.0 以降が Angular
    - Angular は SPA(初回ロードで必要なリソースをまとめて読み込み、ユーザの操作に応じて動的にUIを書き換えるアプリ)を明確にターゲットとした
    - React の登場もあり、 AngularJS のコアアーキテクチャの改善が難しいため一から作り直すことに

---
- Web Components は HTML をプログラマブルに拡張し、開発者が自ら作成したカスタムタグを読み込んで使えるようにする技術をWeb標準の仕様としてブラウザに実装しようとするものだった
    - 従来の長大な HTML から脱却し、カプセル化された再利用可能なコンポーネントに分割し、それらを組み合わせてWebコンテンツを作ろうとした

- Web Components は提唱した Google ではすぐに Chrome に導入したが、他のブラウザベンダーとは対立して実装が7年もかかった(2018年)

- Web Components が目指した形に開発者をつれていったのは、 React だった
    - *Web Components がめざしたWeb標準による HTML の拡張ではなく、 JS ファーストなUI構築ライブラリという形として*

- Facebook の社内フレームワークの肥大化を解決するため React が誕生
    - 2012年の Instagram 買収後に、 React により再構築し、その際に React をOSS化

---

- React がいかにエポックメイキングだったか
    - Declarative(宣言的)
    - Component-Based(コンポーネントベース)
    - Just The UI(UIにしか関知しない)
    - Virtual DOM(仮想DOM)
    - One-Way Dataflow(単一データフロー)
    - Learn One, Write Anywhere(一度習得すれば、あらゆるプラットフォームで開発可能)


- Declarative(宣言的)
    - 出力の性質やあるべき状態を記述してプログラムを構成する
    - そこにどんなデータが表示されるべきかを記述すると、 React がそのデータを表示し、適切なタイミングで更新する

- *UIを宣言的に表現する*

```
<Greets name="Patty" times={4} />
```

- コンポーネントの中身の実装については命令的にならざる得ない
    - コンポーネントを関数で書けるようにし(2015年)、 Hooks(2019年) により関数コンポーネントがクラスコンポーネントと同等のことができるように
        - Suspense という機能により、データの取得を待って表示する手続きも宣言的に記述できるように

- 宣言的UI は Vue.js, Flutter, Swift UI も採用

- Component-Based(コンポーネントベース),Just The UI(UIにしか関知しない)
    - 見た目と機能がカプセル化されたコンポーネントという単位の部品を作成し、それらを組み合わせることで複雑な UI を構築する設計思想
    - MVC,MVVM などのデザインパターンは使用しない、 MVC の V だけ
    - アプリケーションを構築するのに model や controller といった抽象的な層は必要ないと考える
        - model があれば、何かを model と呼んでデータを突っ込む必要があるが、コンポーネンをベースにそれに必要なデータが宣言的に取得されるようにしておけば model は不要
        - Angular 2 でも model は非推奨
        - Vue ではコンポーネントと view model が1対1であることが求められ、純粋なUIの単位であるコンポーネントに制約が加わったことで、コンポーネントの切り分け方に悩むことに
    - フルスタックのフレームワークではない
        - *UI を構築するためのライブラリと公式でも言い続けている*
        - *サードパーティのルーティングライブラリやグローバル状態管理ライブラリを別途導入する必要がある*
        - ワンストップで提供していない分、変更に強く Redux のような秀逸なライブラリが出てきた際に、組み合わせることが可能になり、React のエコシステムはより洗礼されていった

- Virtual DOM(仮想DOM)
    - jQuery などの DOM 操作ライブラリは1枚岩の HTML に対して任意の DOM を特定した上で個要素を追加したり削除したりする
    - Knockout,Ember.js などの MVVM フレームワークはフロントで HTML テンプレートを使えるようにしたが、ブラウザで起こるイベントに対してリアルタイムに view を書き換えるデータバインディングに問題がある
        - accessor というフレームワークが用意した model クラスから生成したインスタンスのみをバインディング対象とした
        - 通常の変数はバインドできず、 Object,Array とはインターフェースが異なる独自のもので開発効率が悪い
    - AngularJS は controller と view の間に $scope オブジェクトを介在させ登録したプロパティを双方向に反映
        - サーバサイドの MVC フレームワークに近い DX を提供し、一時代を築いた
        - $scope がツリー構造になっており、ページを表示し終えるまでツリーを辿って全ての $scope プロパティがバインドのための監視対象となる
            - ブラウザでイベントが起こるたび登録された全ての式の値が定まるまでツリーの頭まで巻き戻し、最終的に変更があった値が view に反映される(dirty-checking)
            - 本格的な SPA だと万単位のバインドが必要でパフォーマンスに問題がある
    - React が 仮想DOM により全てを解決
        - 実行リンクは他の実行リンクを小要素として持つツリー構造
        - ルートのレンダリングが発火すると、そこからツリーを降って子孫の React Elements からリンクされたユーザ定義コンポーネントのレンダリングが連鎖起爆される
        - 最終的には HTML 要素に対応する組み込みコンポーネントの React Elements にまで展開し尽くされたツリーが残る
        - それがリアルDOMに変換されてブラウザが実際にレンダリングする
        - *変換前の要素ツリーはメモリ上にキャッシュされる = 仮想DOM はメモリ上に展開されたイミュータブルな要素ツリーのこと*
        - ブラウザにイベントが発生してツリーのどこかの要素の状態が変更されると、それにリンクされるコンポーネント関数自身が、 render() を再実行する(クラスコンポーネントの場合)
        - その小要素の React Elements に設定されていた props にも変更が発生し、連鎖して子孫ツリーのレンダリング内容が変化
        - 新しい 仮想DOM をキャッシュしていた以前のものと比較して *差分のみをリアルDOMに反映*
        - *DOM 更新を最小限に抑える 仮想DOM は画期的*
            - Vue.js などは追随して採用
            - Angular 2 はグローバルオブジェクトの window に独自実装する方向性
        - *仮想DOM は最初の構築のオーバーヘッドがあるので単純にレンダリングが速くなるアプローチではない*

        - 仮想DOM を採用しているから、コンポーネントを純粋な関数で実装できたりと機能やメリットは多い

- One-Way Dataflow(単一データフロー)
    - MVC,MVVM パターンによる双方向バインディングでは、ある model のデータを変更すると別の model のデータが更新される連鎖が起こり、単一のユーザインタラクションの結果何が起こるかの予測が難しい
    - 多くの状態を持つ大規模アプリケーションでは簡単にスパゲティになってしまう
    - React は最初から単方向データフロー
        - のちに Ember.js,Angular, Vues.js もバインディングを単方向に限定
    - *単方向とはデータがコンポーネントツリーを親コンポーネントから子コンポーネントに対して一方向に props という形を取って流れ落ちること*
        - 子コンポーネントから親コンポーネントに向かってデータが逆流することはない
    - Flux デザインパターンは単方向のデータフローをグローバルな状態管理に応用したものであり、その実装である Redux はそれを関数型プログラミングのアプローチで実現したもの

- Learn One, Write Anywhere(一度習得すれば、あらゆるプラットフォームで開発可能)
    - Write onece, run anywhere をもじったもの
    - 仮想DOM を実際のUIにレンダリングするレンダラーが分離されているので変更することでいろいろなプラットフォームの開発が可能に

---
- 仮想DOM を構成するのが React Elements
    - コンポーネントを任意の props でコールするための実行リンクのようなもの

- コンポーネントは JavaScript の関数のようなもの
    - props を引数として受け取り、戻り値として React Elements を返す
    - 関数と違うところは、個々に状態を持てること
        - エンクロージャの実行ごとにその名前空間の中に別の状態を持つクロージャのようなイメージ

- コンポーネントが持つ状態を state という
    - 関数は引数が変わると戻り値が変わる、クロージャは状態が変わっても戻り値が変わる
    - コンポーネントは props と state のどちらかか両方が変わると返す React Elements も変わる = レンダリングに差分が発生する
    - *コンポーネントのレンダリングに差分が発生するかは、 props と state を見ていればいいだけ*
        - ブラウザ上でイベントが発生し対応する React Elements の state が変化する
        - 差分検出処理エンジンが検知し、新しい state でそのコンポーネントの関数を再実行
        - 戻り値の React Elements も変更し、小要素としてコールしたコンポーネントやその props の値も変わる
        - 再レンダリングの波が子孫の要素に連鎖する

---
- コンポーネントのライフサイクル
    - マウントされて初期化され、レンダリングされた後に、何かのきっかけで再レンダリングされ、最後にアンマウントされるまでの過程をさす

- クラスコンポーネントにはライフサイクルメソッドがある
    - 16.3 以降、ライフサイクルメソッドには変更が加わった
        - 完全非同期なレンダリングとの相性が悪いものは UNSAFE_ とつくように
    - Mounting Phase
        - コンポーネントが初期化され 仮想DOM にマウントされるまでのフェーズ、初めてレンダリングされる
        - *componentDidMount()* はマウントされた直後に呼ばれる
    - Updating Phase
        - 差分検出処理エンジンが変更を検知して再レンダリングされるフェーズ
        - コンポーネントに渡されている props か、自身の state の値に変更があったさい
        - *shouldComponentUpdate()* は変更を検知してから再レンダリング処理の前に呼ばれ、 false を返すと再レンダリングを注視する
        - *componentDidUpdate()* は再レンダリングの完了直後に呼ばれる
    - Unmounting Phase
        - コンポーネントが 仮想DOM から削除されるフェーズ
        - *componentWillUnmount()* はアウンマウントされて破棄される直前に呼ばれる
    - Error Handling Phase
        - 子孫コンポーネントのエラーを検知、補足するフェーズ

---
- Presentational Component(見た目だけを責務とするコンポーネント) と Container Component(ロジックを追加するためのコンポーネント) に分割するというデザインパターンがある
    - デザインとロジックを閉じ込めた独立性の高いコンポーネントを組み合わせてアプリをつくる考えがもともと
    - それに反するように聞こえるが、ロジックから独立して純粋に見た目だけを責務としたコンポーネントを分離すれば、それらをスタイルガイドに登録してデザインの運用に活用でき再利用性が高まるというメリットを重要視した
    - 提唱者の Dan は *Hooks を使うことでロジックを分離できるので後にこの考えを撤回*

- スタイルガイドとの共存、開発者にメンテナンス性の高いコンポーネント設計を促すというメリットは今でも有効

---
- **state を伴ったロジックを切り出して再利用するための現時点での最適解が Hooks**

- mixins というプロパティにコンポーネントに追加したいクラスメンバーを任意のオブジェクトに格納して登録する手法が取られていた

```js
const CounterMixin = {
    getInitialState: () => ({ count: 0});
    reset: () => {
        this.setState({ count: 0});
    }
    (略)
}

// 昔はクラスコンポーネントしかなく
// React.createClass という静的メソッドを使って生成した
const CounterComponent = React.createClass({
    propTypes: {
        max: React.PropTypes.number.isRequired,
    },
    // クラスコンポーネントのメンバーを切り出して
    // mixins プロパティでコンポーネントに登録
    mixins: [CounterMixin],
    (略)
})
```

- mixins はコンポーネントとの間に依存関係を持ってしまう
    - ミックス先のコンポーネントに特定の名前の props,state があることを前提にした書き方でロジックを再利用しづらい
    - *props,state, メンバー変数やメソッド名が衝突しないように気を配らないといけない*
    - コンポーネントと違い階層構造がないフラットな関係で依存関係やデータの流れの把握が難しい
        - mixins がコンポーネントのメソッドを呼び出したり、その逆だったり...
    - コードの変更が難しい

- React は17年の　16.6 で mixios を廃止(Vue.js ではまだ現役)

- 代替として Higher Order Component(HOC) の使用が推奨されていた
    - 関数を引数にとったり関数を戻り値として返す高階関数の手法をコンポーネントに応用

```ts
type Props = { target: string };

// 関数を変数(HelloComponent)に代入
// props の target に withTarget という HOC で外から target の実態を与えて、 Hello で表示
// 受け取る側のコンポーネントは HOC から渡される名前の props(target) を受け皿として用意しておく必要がある
const HelloComponent: FC<Props> = ({ target }) => <h1>Hello {target}! </h1>;

// 関数を引数に取る高階関数
// withTarget はコンポーネントを受け取り、 target の実体を注入したコンポーネントを返す関数 = HOC
export default withTarget(HelloComponent);
```

```ts
// 引数に Component を受け取る関数を変数(withTarget)に代入
// 受け取った関数に target の実体を与える
const withTarget = (WrappedComponent: FC<Props>) => WrappedComponent({ target: 'Patty' });
```

- HOC の対抗として Render Props パターンが登場
    - React Elements を返す関数を props として受け取って、それを自身のレンダリングに使う特殊なコンポーネントを使った手法
    - レンダリングのための関数を props として受け取れるから render props

```ts
type Props = {target:string};
const HelloComponent: FC<Props> = ({target}) => <h1>Hello {target}!</h1>;
```

```jsx
// render props で target に任意の文字列を与える TargetProvider コンポーネント
// render という props に HelloComponent が渡されている
<TargetProvider render={HelloComponent} />
```

```ts
// HelloComponent を render という名前(任意)の props として受け取り、 target に 'Patty' を設定して返す
const TargetProvider: FC<{render: FC<Props>}> = ({render}) => render({target: 'Patty'});
```

- Hooks は既存の技術を利用した設計パターンだった HOC, Render Props と違い、 React 公式の機能として提供されたもの
    - 状態やロジックの分離を小手先のテクニックで行うのではなく、新しい仕組みを 仮想DOM の外に用意
    - *コンポーネントにロジックを抱えた別コンポーネントをかぶせるのではなく、コンポーネントシステムの外に状態やロジックを持つ手段を提供*
    - *関数コンポーネントだけでアプリケーションが作れるようになった = Hooks は関数コンポーネント内でしか使えない*

- クラスコンポーネントは使わない = ライフサイクルメソッドは使えないように
    - 別の切り口から副作用を扱う
    - ライフサイクルメソッドを使うと、実現したい機能が時間的なフェーズでぶつ切りにされ細切れになる
    - 別々の機能がフェーズが同じというだけで同じ箇所にまとめられる
    - *処理の流れが追いづらいコードになり、機能単位でのロジックの切り出しを難しくした*

- Hooks では時間によって切り分けるのではなく、機能ごとに副作用を伴う処理をまとめて記述できる仕組みを提供

- State Hook を使用し、クラスコンポーネントの state に相当するものを関数コンポーネントでも使用する
    - useState 関数を使う

```js
// useState の戻り値は state 変数とその state 更新関数をタプルとして返す
// 配列の分割代入をする
const [count,setCount] = useState(0);
```

- 外部API にリクエストしてユーザ情報を取得、そのオブジェクトを state に入れる場合
    - 初期値として渡せる型を持ったデータがないため、型引数を渡す

```ts
// User オブジェクトを型引数として渡し、引数には何も渡さない
// author は User オブジェクトを格納できる、初期値が undefined の state 変数となる
// userState<User | null>(null) とすると初期値に明示的に null を入れられる
const [author, setAuthor] = useState<User>();

// 初期値を渡しながらも型推論が使えない場合の書き方
// Article オブジェクトの配列を格納したく、その初期値は空配列にしたい
// [] だけを渡すと何の配列かコンパイラはわからないので型引数で Article[] を渡す
const [articles, setArticles] = useState<Article[]>([]);
```

- 副作用を扱う Hooks API を Effect Hook という
    - props が同一でもその関数コンポーネントの出力内容を変えてしまうような処理をレンダリングのタイミングに同期させて実行する

- 副作用(side-effect, effect)
    - *コンポーネントの状態を変化させ、それ以降の出力を変えてしまう処理のこと*
        - ネットワークを介したデータの取得やリアクティブな購読
        - ログの記録
        - リアルDOMの手動での書き換え

- useEffect 関数を使用する

```ts
const SampleComponent: FC = () => {
    const [data, setData] = useState(null);

    // 第一引数で引数のない関数を受け取り
    useEffect(() => {
        // 関数の中身が任意のタイミングで実行され
        doSomething();

        // 最後に関数を返す(アンマウント時に実行したい処理がなければ何も返さなくても良い)
        // コンポーネントがアンマウントされる時に、戻り値の関数を実行してくれる
        // 外部APIからリアクティブにデータを購読する場合、コンポーネントのアンマウント時には購読を解除する必要がある
        return () => clearSomething();

        // 第二引数には変数の配列を渡せる
        // ここに格納された変数が前のレンダリング時と比較して差分があったときだけ、第一引数の関数が実行される
        // 第二引数のことを依存配列という
        // 省略するとレンダリングごとに毎回第一引数の関数を実行
        // 空配列 [] を渡すと、初回レンダリング時のみ第一引数の関数が実行される
    } [someDeps]);
};
```

- *クラスコンポーネントではマウント時にインスタンスが生成され、アンマウント時に破棄されるまでそのインスタンスは生きる*
    - クラスコンポーネントにとってのレンダリングは、インスタンスのメンバーメソッドである render の実行のこと
    - *props と state はインスタンスの中に保持されている可変のメンバー変数*
        - レンダリングのタイミングにかかわらず、常に最新の値が参照される
        - 処理に時間がかかりレンダリングが追いつかない状態で UI を操作すると、新しすぎる props, state の値により想定外の挙動を起こすことも

- 関数コンポーネントにとってのレンダリングは、その関数の最初から最後まで実行されること
    - *毎回実行されたら、その中で定義されている変数や関数も実行のたびに定義し直され、実行が終われば破棄される*
    - 実行された後に何も残らないが、 State Hook が使われていれば、レンダリング後の state がコンポーネントシステムの外に保存され、次のレンダリング時に渡される
        - *props と state はレンダリングごとで不変*
        - *レンダリング(その関数コンポーネントの実行)のたびに外からイミュータブルな値として与えられる*

- 外部APIからデータのリアクティブな購読をする場合のライフサイクルメソッドと Effect Hook の比較
    - クラスコンポーネントとライフサイクルメソッドは時間的凝集度が高く、機能的凝集度が低い
        - componentDidMount に購読開始の処理を書き
        - componentDidUpdate に購読対象の切り替え処理を書き
        - componentWillUnmount に購読解除の処理を書く
            - *購読に関する機能が3つのライフサイクルメソッドに分散しているため、機能的凝集度が低い*
    - Effect Hook は機能的凝集度が高い
        - useEffect の第一引数の関数はレンダリングの直後に第二引数の実行する条件を満たしていれば実行される
        - 購読のための3つの処理は同じ useEffect の中にまとめてかける
        - 同じ機能が分散して記述されないためコードの可読性が高い
        - 機能によってまとまったロジックをコンポーネントから切り出して再利用しやすい

- 設計時の関心事の違い
    - クラスコンポーネントでは、コンポーネントのライフサイクルという時間軸の中でどこに副作用処理を埋め込むかが関心事
        - このタイミングでこの処理を実行する = 命令的
    - Effect Hook では、この副作用処理を行うべきなのはコンポーネントの状態がどういう時かが関心ごと
        - この処理はこの条件の時に実行されるべき = 宣言的





