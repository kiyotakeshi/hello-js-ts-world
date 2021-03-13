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










