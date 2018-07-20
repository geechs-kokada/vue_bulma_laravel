
## Laravel + vue + bulma

### プロジェクトについて
SPAのWebアプリケーションを作成するための土台となるシンプルなアプリケーション
デザインパターンやアーキテクチャなどもありません。

### バージョンについて

Laravel 5.6
Vue 2.5
Vue-router 3.0
Bulma 0.7

### 開発に必要なコマンド

JSパッケージのインストール(初回のみ)
```
npm install
```

サーバーを立てる

```
php artisan serve
```

ホストやポート番号を変更したい場合
https://qiita.com/do9iigane/items/32083f843db1e5a63fc3

例) 127.0.0.1 でポートを9999
```
php artisan serve --host=127.0.0.1 --port=9999
```

JSと SCSSのコンパイルを起動
```
npm run watch
```

DBなどの設定をしていないため、別途マイグレーションファイルを作って設定が必要
