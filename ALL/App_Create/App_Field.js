var fields = require('./data/fields.js')
var expect = require('chai').expect;
request = require('superagent');
require('superagent-proxy')(request);


describe('APP Create', function () {

    it('Fields追加', function (done) {
        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/form/fields.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send(fields)
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(200);
                done(); //告诉mocha结束测试
                let appid = res.body.app;
        
                console.log(appid);
                module.exports = appid;
            })
        })
})