var api = require('./API.js');
var expect = require('chai').expect;
var data = require('./data.js');
var put = require('./put.json')


describe('/k/v1/records.json PUT测试', function () {
  it('添加一条记录并验证结果', function (done) {
    api.put('')
    .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
    .set('Content-Type', 'application/json')
    .send(put)
      .expect(200) //返回值response为200
      .end(function (err, res) {
        if (err) return done(err);
        done();
  })
})
})