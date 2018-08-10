
request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');

request.get('https://yhgao.cybozu-dev.com/k/v1/record.json')
.set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
.set('Content-Type', 'application/json')
.proxy('http://dc-ty3-squid-1.cb.local:3128')
.send({
    "app": 1088,
    "query": "日付 = NOW()"}
)
.end(function (err, res) {
    console.log(res.body.errors);
    expect(200)
    expect(res.body).to.eql({"records":[]})
    done();
})