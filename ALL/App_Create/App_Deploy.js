// let api = require('/APIs/records.js');
request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');
var body = require('./data/app.json')
let app = require('./App_Create.js')

describe('APP Deploy', function () {

    it('App创建', function (done) {
        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "apps": [
                    {
                        "app": app.appid
                    }
                ]
            })
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(200)
                done(); //告诉mocha结束测试
                console.log(appid)

            })
        })
})



//应用成功