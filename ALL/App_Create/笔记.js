※JS同步异步问题汇总

javascript语言是一门“单线程”的语言，就像一条流水线，不能同时进行多个任务和流程。
于是，所有任务可以分成两种，
一种是同步任务（synchronous），另一种是异步任务（asynchronous）。
同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有等主线程任务执行完毕，"任务队列"开始通知主线程，请求执行任务，该任务才会进入主线程执行。

API测试中以kintone app创建为例，
想要做一个以下的实例。
App追加>App Field追加>App Record追加。
代码如下：
request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')
    .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
    .set('Content-Type', 'application/json')
    .send({
        "name": "アプリA"
    })
    .end(function (err, res) {
        let appid = res.body.app

        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .send(body)     // "数値"字段
            .end(function (err, res) {

                    request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')
                        .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                        .set('Content-Type', 'application/json')
                        .send({
                            "app": appid,
                            "record": {
                                "数値": { "value": "1e123456789012" }
                            }
                        })
                        .end(function (err, res) {
                        if (err) console.log(err);
                     })
              })
        })
    })
运行结果会出现 找不到appid的错误
这里就是同步操作的原因。
node.js在执行代码的时候，会按这样的顺序执行：
/app.json >> /deploy.json >> /record.json
而app deploy是需要时间才能完成的，因此在执行record.json的时候，deploy还没有完成，因此会报错。
这就需要一个异步操作。
解决办法1，利用setTimeout函数
setTimeout(function(){
    console.log(100);
},0);
在setTimeout之中的代码，会在指定的时候后再执行。这就是一个异步操作。
代码简化如下：
request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')

    request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
          
       setTimeout(function () {
       request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')       
       }, 3000);
            })


解决办法2，利用Promise （
Promise的语法有很多，这里先介绍最基本的一个：
var promise = new Promise(function (resolve, reject) {

    if (xxx) {
        resolve(value);
    } else {
        reject(error);
    }
});

App创建的API代码为例：

function Create() {

    var p = new Promise(function (resolve, reject) {

        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .send(body)
            .end(function (err, res) {
                if (err) console.log(err);
                fs.writeFileSync('../data/id.json', '{' + '"app":' + res.body.app + '}')
                resolve('App Add')
            })
    })
    return p;
}

function Deploy(data) {

    var p = new Promise(function (resolve, reject) {

        let appid = require('../data/id.json');
        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "apps": [
                    {
                        "app": appid.app
                    }
                ]
            })
            .end(function (err, res) {
                if (err) console.log(err);
                resolve('Deploy')
            })
    })
    return p;
}

function Record(data) {

    var p = new Promise(function (resolve, reject) {

               request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')
                        .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                        .set('Content-Type', 'application/json')
                        .send({
                            "app": appid.app,
                            "record": {
                                "数値": { "value": "1e123456789012" }
                            }
                        })
                        .end(function (err, res) {
                        if (err) console.log(err);
                        resolve('Record')
                     })


运行代码如下：

Create().then(Deploy).then(Record)
    .then(function (data) {
        console.log('追加完成');
    });







