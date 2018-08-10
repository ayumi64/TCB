var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');

describe('/k/v1/record.json PUT ERROR测试', function () {

  it('字段值不符合', function (done) {
    api.put('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .send({
        "app": app.app,
        "id": app.id,
        "record": {
          "売上": { "value": "123456A7" }
        }
      })
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.message).to.include("入力内容が正しくありません。")
        done();
      })
  })
})
