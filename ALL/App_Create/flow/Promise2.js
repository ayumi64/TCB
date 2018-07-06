request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');
let body = require('../data/app.json')
fs = require('fs');

function Create() {

    var p = new Promise(function (resolve, reject) {

        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send(body)
            .end(function (err, res) {
                if (err) console.log(err);
                fs.writeFileSync('../data/id.json', '{' + '"app":' + res.body.app + '}')
                console.log(res.body);
                if (res.status === 200) {
                    resolve();
                } else {
                    reject(new Error(res));
                }

            })
    })
    return p;
}

function Deploy(ok) {

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

                if (res.ok === true) {
                    setTimeout(function(){
                    resolve();
                }, 3000);
                } else {
                    reject(new Error(res));
                }

                console.log(res.ok);
            })
    })

    return p;
}


function DeployGet(ok) {

    var p = new Promise(function (resolve, reject) {
        let appid = require('../data/id.json');
        request.get('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                        "apps": [appid.app]
            })
            .end(function (err, res) {

                if (res.ok === true) {
             //       setTimeout(function(){
                    resolve(res.ok);
              //  }, 5000);
                } else {
                    reject(new Error(res));
                }

                console.log(res.ok);
            })
    })

    return p;
}

function Record(ok) {

    var p = new Promise(function (resolve, reject) {
        let appid = require('../data/id.json');
        console.log(appid)
        request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "app": appid.app
            }
            )
            .end(function (err, res) {
                if (res.status === 200) {
                    resolve(200)
                } else {
                    reject(new Error(res));
                }
                //if (err) console.log(res);
                console.log(res.body);
            })

    })
    return p;
}


Create().then(Deploy).then(DeployGet).then(Record)
    .then(function (ok) {
        console.log("a");
    })
    .catch(function () {
        console.log('追加失败');
    });



/*
Create().then(function resolve(data) {
    return Deploy(data);
})
    .then(function resolve(data) {
        return Record(data);
    })
    .catch(function(){
        console.log( '没法吃!');
    });


/*
Create()
.then(function(data){
    return Deploy(data);
})
.then(function(data){
    return Record(data);
})
.then(function(data){
    console.log(data);
});

*/
