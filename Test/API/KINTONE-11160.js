var App_Create = require('../../API/App_Create/flow/Create')
var App_Deploy = require('../../API/App_Create/flow/Deploy')


request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');

describe('Kintone App Create Test', function () {

    before('App Add', function (done) {
        var Add = new App_Create
        Add.Create(done);
    })

    it('App Deploy', function (done) {
        var Dep = new App_Deploy

        setTimeout(function () {
            Dep.Deploy(done);
        }, 1000);
        Dep.Field();
    })

    it('Record', function (done) {
        setTimeout(function () {
            var App_Record = require('../../API/App_Create/flow/Record')
            var Rec = new App_Record
            Rec.Add(done);
        }, 3000);
    })

    it('RESTAPIで、THIS_MONTH() 、LAST_MONTH()に小数点を指定すると不正なリクエストエラーとなる', function (done) {

        setTimeout(function () {

            let appid = require('../../API/App_Create/data/id.json')
            let records = require('../../API/App_Create/APIs/records.js')

            console.log(appid.app)

            request.get(records)
                .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                .set('Content-Type', 'application/json')
                .proxy('http://dc-ty3-squid-1.cb.local:3128')
                .send({
                    "app": appid.app,
                    "query": "作成日時 < LAST_MONTH(0.1)"
                })
                .end(function (err, res) {
                    console.log(res.body);
                    console.log(res.status);
                    expect(res.status).to.eql(520)
                    expect(res.body.message).to.eql('不正なリクエストです。')
                    expect(res.body.code).to.eql('CB_IL02')
                    done();
                })

        }, 5000);
    })

})


//command： mocha -t 15000  test.js 
