var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');
request = require('superagent');
require('superagent-proxy')(request);

describe('/k/v1/record.json POST测试', function () {

  before(function (done) {
    request.post('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .proxy('http://dc-ty3-squid-1.cb.local:3128')
      .send({
        "app": app.app,
        "record": {
          "売上": { "value": "123456" },
          "天気": { "value": "雨" },
          "引継ぎ事項": { "value": "AAA" }
        }
      })
      .end(function (err, res) {
        if (err) return done(err);
        location = res.body.id;
        done();
      })
  })

  it('添加一条记录并验证值', function (done) {
    request.get('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .proxy('http://dc-ty3-squid-1.cb.local:3128')
      .send({
        'app': app.app,
        'id': location
      })
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.record).to.have.property('天気')
        expect(res.body.record.天気.value).to.be.equal('雨');
        expect(res.body.record).to.have.property('作成者')
        expect(res.body.record.作成者.value.code).to.be.equal('cybozu');
        expect(res.body.record).to.have.property('日付')
        expect(res.body.record.日付.value).to.be.equal('2017-08-17');
        expect(res.body.record).to.have.property('引継ぎ事項')
        expect(res.body.record.引継ぎ事項.value).to.be.equal('AAA');
        expect(res.body.record).to.have.property('売上')
        expect(res.body.record.売上.value).to.be.equal('123456');
        done(); //告诉mocha结束测试
      })
  })
})
