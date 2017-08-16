var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');
var id = require('./data.js');
var id_delete1 = require('./data.js');

describe('/k/v1/records.json DELETE测试', function () {

  it('删除指定的record并验证返回值', function (done) {
    api.delete('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .send({
        "app": 1,
        "ids":[26]
      })

      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();

      })
  })
})