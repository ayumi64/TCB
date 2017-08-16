var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');
var id = require('./data.js');


describe('/k/v1/records.json GET测试', function () {

  it('获取data.js里指定App的值并验证', function (done) {
    api.get('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .send({
        "app": app
      })
      .expect(200) //返回值response为200
      .end(function (err, res) {
        if (err) return done(err);

        done(); //告诉mocha结束测试
      })
  })
})