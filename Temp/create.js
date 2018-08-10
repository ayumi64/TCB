var App_Create = require('../flow/Create')
var App_Deploy = require('../flow/Deploy')
var App_Record = require('../flow/Record')

request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');

describe('Kintone App Create Test', function () {

    before('App Create', function (done) {
        var Add = new App_Create
        Add.Create(done);
    })

    before('App Create', function (done) {
  
        setTimeout(function () {
            var Dep = new App_Deploy
            Dep.Deploy(done);
        }, 4000);
        Dep.Field();
    })

    before('App Create', function (done) {
        setTimeout(function () {
            var Rec = new App_Record
            Rec.Add(done);
        }, 8000);
    })

    it('KINTONE-11160', function (done) {
        setTimeout(function () {
            let app = require('../data/id.json')
            console.log(app.app);
            request.get('https://yhgao.cybozu-dev.com/k/v1/records.json')
                .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                .set('Content-Type', 'application/json')
                .proxy('http://dc-ty3-squid-1.cb.local:3128')
                .send({
                    "app": app.app,
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
        }, 36000);
    })


})

//command： mocha -t 8000  test.create.js 


/*
setTimeout(function(){
    console.log(1000000000);
},0);
*/
