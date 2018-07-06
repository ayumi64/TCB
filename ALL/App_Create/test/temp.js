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
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
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
    })
    return p;
}


//运行代码如下：

Create().then(Deploy)
    .then(function (data) {
        console.log('追加完成');
    });