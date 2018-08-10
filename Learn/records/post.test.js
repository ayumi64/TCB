var api = require('./API.js');
var expect = require('chai').expect;
var data = require('./data.js');
var post = require('./post.json')


describe('/k/v1/records.json POST测试', function () {

  it('添加一条记录并验证值', function (done) {
    api.post('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .send(post)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      })
  })
})
