var App_Create = require('../API/App_Create/flow/Create')
var App_Deploy = require('../API/App_Create/flow/Deploy')


request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');



describe('KINTONE-11160', function () {

    it('RESTAPIで、THIS_MONTH() 、LAST_MONTH()に小数点を指定すると不正なリクエストエラーとなる', function (done) {

        
        let appid = require('../API/App_Create/data/id.json')
        let records = require('../API/App_Create/APIs/records.js')


        request.get('https://yhgao.cybozu-dev.com/k/v1/records.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "app": appid.app,
                "query": "作成日時 < LAST_MONTH(0.1)"
            })
            .end(function (err, res) {
                console.log(res.body);
                console.log(res.status);
                expect(res.status).to.eql(520)
                expect(res.body.message).to.eql('不正なリクエストです。')
                expect(res.body.code).to.eql('CB_IL02')
                done();
            })

    })

})


// mocha KINTONE-11160.js  -t 50000