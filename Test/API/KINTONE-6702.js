var App_Create = require('../../API/App_Create/flow/Create')
var App_Deploy = require('../../API/App_Create/flow/Deploy')


request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');

describe('KINTONE-6702', function () {

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


    it('レコード一括取得APIで"日付"フィールドにNOW()を指定してもエラーが出ない', function (done) {

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
                    "query": "日付 = NOW()"}
                )
                .end(function (err, res) {
                    console.log(res.body);
                    expect(200)
                    expect(res.body).to.deep.eql({ records: [], totalCount: null })
                    done();
                })
        }, 5000);
    })

})


//command： mocha -t 15000  test.js 
