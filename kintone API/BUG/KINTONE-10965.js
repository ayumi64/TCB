var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');


describe('/k/v1/record.json GET测试', function () {

  it('获取data.js里指定App的值并验证', function (done) {
    api.get('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .send({
        "app": app.app,
        "id": app.id,
        "record": {
          "作成日時": { "value": "2012-01-11" }
        }    
      })
      .expect(520) //返回值response为520
      .end(function (err, res) {
        if (err) return done(err);

        expect(res.body.message).to.include('CREATED_AT型のフィールドに値を設定することはできません')

        done(); //告诉mocha结束测试
      })
  })
})