var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');

describe('/k/v1/record.json POST ERROR测试', function () {

  it('里指定不存在的App id，报错"not found"', function (done) {
    api.post('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .send({
        "app": app.app_none,
        "record": {
          "売上": { "value": "123456" },
          "天気": { "value": "雨" },
          "引継ぎ事項": { "value": "AAA" }
        }
      })
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.message).to.include("指定したアプリ（id: 99999）が見つかりません。削除されている可能性があります。")
        done();
      })
  })
})
