var api = require('./API.js');
var expect = require('chai').expect;
var app = require('./data.js');
var id = require('./data.js');



describe('/k/v1/record.json POST测试', function () {

  before(function (done) {
    api.post('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .send({
        "app": app,
        "record": {
          "売上": { "value": "123456" },
          "天気": { "value": "雨" },
          "引継ぎ事項": { "value": "AAA" }
        }
      })
      .expect(200) 
      .end(function (err, res) {
        if (err) return done(err);
        location = res.body.id;
        done();
      })
  })

  it('添加一条记录并验证值', function (done) {
    api.get('')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .send({
        'app': app,
        'id': location
      })
      .expect(200) //返回值response为200
      .end(function (err, res) {
        if (err) return done(err);
        location = res.body.id;
        expect(res.body.record).to.have.property('天気')
        expect(res.body.record.天気.value).to.be.equal('雨');
        expect(res.body.record).to.have.property('作成者')
        expect(res.body.record.作成者.value.code).to.be.equal('cybozu');
        expect(res.body.record).to.have.property('日付')
        expect(res.body.record.日付.value).to.be.equal('2017-08-16');
        expect(res.body.record).to.have.property('引継ぎ事項')
        expect(res.body.record.引継ぎ事項.value).to.be.equal('AAA');
        expect(res.body.record).to.have.property('売上')
        expect(res.body.record.売上.value).to.be.equal('123456');
        done(); //告诉mocha结束测试
      })
  })
})
