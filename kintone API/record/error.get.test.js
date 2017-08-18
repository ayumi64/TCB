var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');


describe('/k/v1/record.json GET ERROR测试', function () {

  it('request body 不存在', function (done) {
    api.get('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .send()
      .expect(400) //返回值response为200
      .end(function (err, res) {
        if (err) return done(err);
      
      expect(res.body).to.exist("not found")
        done(); //告诉mocha结束测试
      })
  })
})