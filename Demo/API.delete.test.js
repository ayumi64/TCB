var api = require('./API.js');
var expect = require('chai').expect;

describe('Record', function(){  
})

it('should return a 200 response', function(done){
  api.delete('')
  .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')

  .send({
    'app':1,
    'ids':[2]
  })

  .expect(200,done) //返回值response为200
  done();


})