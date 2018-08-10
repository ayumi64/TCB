var App_Create = require('../ALL/App_Create/flow/Create')
var App_Deploy = require('../ALL/App_Create/flow/Deploy')

request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');



describe('Kintone App Create Test', function () {

    before('App Create', function (done) {
        var Add = new App_Create
        Add.Create(done);
        var Dep = new App_Deploy
        setTimeout(function () {
            Dep.Deploy(done);
        }, 3000);
        Dep.Field();
    })



    it('App Create', function (done) {

        request.get('https://yhgao.cybozu-dev.com/k/v1/records.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "app": appid.app,
                "query": "作成日時 < LAST_MONTH(0.1)"
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(200)
                let appid = res.body.app
                console.log(appid)

            })
    })
})


// mocha KINTONE-11160.js  -t 50000