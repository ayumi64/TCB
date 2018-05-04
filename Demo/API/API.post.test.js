request = require('superagent');
require('superagent-proxy')(request);
var assert = require('power-assert');

describe('Record', function () {


  it('should return a 200 response', function (done) {
    request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')
      .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
      .set('Content-Type', 'application/json')
      .proxy('http://dc-ty3-squid-1.cb.local:3128')
      .send({
        "app": 217,
        "record": {
          "売上": { "value": "123456" },
          "天気": { "value": "雨" },
          "引継ぎ事項": { "value": "AAA" }
        }
      }
      )
      .expect(200)
      .end(function (err, res) {
        console.log(res.body);
        if (err) return done(err);
        done();

      })
  })
})