var App_Create = require('../../API/App_Create/flow/Create')
var App_Deploy = require('../../API/App_Create/flow/Deploy')

var expect = require('chai').expect;
request = require('superagent');
require('superagent-proxy')(request);
var assert = require('power-assert');


describe('KINTONE-10965 レコード更新/レコード一括更新APIで、作成日時/更新日時/レコード番号を指定したときのエラーの"xxx型"がtypeと異なる', function () {

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

  it('Bug现象：error type为“CREATED_AT”；期待结果：error type为"CREATED_TIME"', function (done) {

    setTimeout(function () {

    var appid = require('../../API/App_Create/data/id.json')
    var record = require('../../API/App_Create/data/record.json')

    request.put('https://yhgao.cybozu-dev.com/k/v1/record.json')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .proxy('http://dc-ty3-squid-1.cb.local:3128')
      .send({
        "app": appid.app,
        "id": record.id,
        "record": {
          "作成日時": { "value": "2012-01-11" }
        }
      })
      .end(function (err, res) {

        console.log(res.body);
        expect(res.status).to.eql(520)
        expect(res.body.message).to.eql('CREATED_AT型のフィールドに値を設定することはできません。')

        done(); //告诉mocha结束测试 1
      })
  })
}, 5000);
})