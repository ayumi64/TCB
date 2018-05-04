var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');
request = require('superagent');
require('superagent-proxy')(request);
var assert = require('power-assert');


describe('レコード更新/レコード一括更新APIで、作成日時/更新日時/レコード番号を指定したときのエラーの"xxx型"がtypeと異なる', function () {

  it('status=520，CREATED_AT型error', function (done) {
    request.put('https://yhgao.cybozu-dev.com/k/v1/record.json')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .proxy('http://dc-ty3-squid-1.cb.local:3128')
      .send({
        "app": app.app,
        "id": app.id,
        "record": {
          "作成日時": { "value": "2012-01-11" }
        }    
      })
      .end(function (err, res) {

        console.log(res.body);
        expect(res.status).to.eql(520)
        expect(res.body.message).to.eql('CREATED_AT型のフィールドに値を設定することはできません。')
    
        done(); //告诉mocha结束测试
      })
  })
})