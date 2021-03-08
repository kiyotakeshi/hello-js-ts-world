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

