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


    it('レコード追加・更新・一括追加・一括更新APIの日付フィールド、フィールド一括追加・更新APIの日付の初期値に不正な日付を指定した場合のエラーの文言がおかしい', function (done) {

        setTimeout(function () {

            let appid = require('../../API/App_Create/data/id.json')
            let record = require('../../API/App_Create/APIs/record.js')

            console.log(appid.app)

            request.post(record)
                .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                .set('Content-Type', 'application/json')
                .proxy('http://dc-ty3-squid-1.cb.local:3128')
                .send({
                    "app": appid.app,
                    "record": {"日付":{"value": "2015-"}}}
                )
                .end(function (err, res) {
                    console.log(res.body.errors);
                    expect(res.body.errors).to.deep.include({ 'record[日付].value': { messages: [ '日時はISO8601形式の必要があります。' ] } })

                /// Target object deeply (but not strictly) includes `x: {a: 1}
                //  expect({x: {a: 1}}).to.deep.include({x: {a: 1}});

                    done();
                })
        }, 5000);
    })

})


//command： mocha -t 15000  test.js 
