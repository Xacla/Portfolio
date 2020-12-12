# 目的
ポートフォリオを作る

- Dcokerを使ってフロントエンド(app)とサーバエンド(api,DB)を分離させる。

- 画像を投げて何らかしらの処理，nnで判定するapiを作ってホームページにリザルトを吐く。

# 使用言語
- フロントーエンド
    - vue.js
    - cssは適当に
- サーバーエンド
    - flask(python)
    - Nginx
    - gunicorn
    - RESTを想定する
- DB
    - Mysql → Clopud sqlに後に移行する

# 実装したい機能
・ログイン→firebaseを使って実装

・画像をオンラインストレージに記録する

・得た画像をjson形式で変更したい情報を受け取り,画像処理をする

# やらないといけないこと
HTTPメソッドの勉強

Flaskの勉強

Dockerの勉強

nginxの勉強
GCPサービスの勉強