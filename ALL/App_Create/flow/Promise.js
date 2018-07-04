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
                console.log(res.body);
                expect(res.status).to.eql(200)
                fs.writeFileSync('../data/id.json', '{' + '"app":' + res.body.app + '}')
                resolve('First!')
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
                console.log(res.body);
                expect(res.status).to.eql(200)
                resolve('Second')
            })
    })

    return p;

}


Create().then(Deploy)
    .then(function (data) {
        console.log('data');
    });