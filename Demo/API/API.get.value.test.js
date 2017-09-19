var api = require('./API.js');
var expect = require('chai').expect;

describe('Record', function(){  


it('should return a 200 response', function(done){
  api.get('?app=1&id=1')
  .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
  .expect(200) //返回值response为200
  .end(function(err, res){
  if (err) return done(err);
    expect(res.body.record).to.have.property('天気')   //断言结果有 '天气' 字段
    expect(res.body.record.天気.value).to.be.equal('晴れ'); //断言结果 '天气' 字段的值为 '晴れ'
    expect(res.body.record).to.have.property('レコード番号')
    expect(res.body.record.レコード番号.value).to.be.equal('1');
    expect(res.body.record).to.have.property('作成者')
    expect(res.body.record.作成者.value.code).to.be.equal('cybozu');


done(); //告诉mocha结束测试

    })
 
}) })