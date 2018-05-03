var api = require('./API.js');
var expect = require('chai').expect;
var body = require('./API.js');
var request = require('supertest');

describe('Record', function(){  


it('should return a 200 response', function(done){
  api.post('')
  .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
  .set('Content-Type', 'application/json')
  .send({
  "app":217,
  "record": {
    "売上": {"value": "123456"},
     "天気":{"value":"雨"},
     "引継ぎ事項":{"value":"AAA"}
    }}
)

  .expect(200)
  .end(function(err, res){
  if (err) return done(err);
  done();

})
}) 
})