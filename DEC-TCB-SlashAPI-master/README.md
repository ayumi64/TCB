# slash-api

 **[slash REST API](https://bozuman.cybozu.com/k/24671/)** の自動テストのレポジトリです。


## テストの実行方法

### [Step 01] Node.js をインストールする

   **On Windows:**  
    こちらからNode.jsをインストールします。 http://nodejs.org/ *LTS version*
    
   **On Mac OS or Linux:**  
```
curl -L git.io/nodebrew | perl - setup
echo "export PATH=\$HOME/.nodebrew/current/bin:\$PATH" >> ~/.bashrc
source ~/.bashrc
nodebrew install-binary v8.9.1
nodebrew use v8.9.1
```
2017/11/17現在、LTSバージョンはv8.9.1

### [Step 02] ソースコードを手元にcloneする

    git clone https://github.dev.cybozu.co.jp/te/slash-api.git

  cloneは一度だけ実行していればOKです。  
  それ以降は ``git pull origin master`` を実行して、最新のコードを取得してください。

### [Step 03] Dependenciesをインストールする

```
cd slash-api  
npm install
```
node_modules/ というフォルダが作成されます。

### [Step 04] テストを実行する

   グローバル変数を設定するため、テスト開始前に一度だけ実行してください
    
   **On Mac OS or Linux:**
   
```
stty -echo; read FOREST_DEV_USER; stty echo
#devmgr-1にログインする際のユーザー名を入力してEnter(入力した文字は表示されない)
export FOREST_DEV_USER

stty -echo; read FOREST_DEV_PWD; stty echo
#devmgr-1にログインする際のパスワードを入力してEnter(入力した文字は表示されない)
export FOREST_DEV_PWD

export SERVICESET=slash2  #試験環境のサービスセット名
export HOSTNAME_DB_SERVER=slash2-db-common  #試験環境のDBサーバーのホスト名
export DOMAIN_ID=c169786  #試験環境のドメインID
export BASE_URL=https://slash2-1.cybozu-dev.com  #試験環境のFQDN
export Port_ID=13306  #複数のジョブ同時に実行為Portを別々で設定必要があります。
```
    
**テストの実行方法**

  [1]  ``npm test test.conf.js -- --suite adding_Users``  
        POST /v1/users.json の試験ケースが実行されます。  
  
  [2]  ``npm test test.conf.js -- --suite putting_Services``  
        PUT /v1/users/services.json の試験ケースが実行されます。
  
  [3]  ``npm test test.conf.js -- --suite deleting_Users``  
       DELETE /v1/users.json の試験ケースが実行されます。  
  
  [4]  ``npm test test.conf.js -- --suite putting_Users``  
       PUT /v1/users.json の試験ケースが実行されます。  

**注意**  

このテストを実行する時は、sshクライアントでMySQLのコネクションを遮断しておいてください。  


## テストの作り方

### テストデータについて  
  resources/test_data には、テストで利用するリクエストヘッダー、リクエストボディをJSON形式で作成し、  
  必要があれば expectedResults/ に期待結果として使うJSONファイルを作成しましょう。

### テストフローについて  
  src/test_flow では、テストの流れを実装します。  
  様々なテストでテストフローを再利用します。  

### テストスクリプトについて  
  作成したテストフローと、テストデータを組み合わせて、テストスクリプトを作成します。  
  テストの手順通りに組み立てると、とても分かりやすいです。 


## Eslintについて

### Eslintとは
括弧やスペースの使い方など、コードのスタイルを統一する静的検証ツールです。  
TCBに特化した ``tcb-eslint-config`` を利用しています。

### ESlintの実行方法

このコマンドを実行します。

``npm run eslint``  

もしも、問題を自動で修正したい場合は、``npm run eslint -- --fix``を実行します。  


## 困ったことがあれば

何かありましたら、こちらでご連絡ください。
[TE Team Space - Slash API TEST on TCB](https://bozuman.cybozu.com/k/#/space/1977/thread/22399)


## 参考
[1] [tcb-api-rest repository](https://github.dev.cybozu.co.jp/t000602/tcb-api-rest)

[2] [tcb-api-rest wiki page](https://github.dev.cybozu.co.jp/pages/t000602/tcb-api-rest/)

[3] [tcb-eslint-config repository](https://github.dev.cybozu.co.jp/te/tcb-eslint-config)
