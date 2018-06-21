request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');


request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')
                            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                            .set('Content-Type', 'application/json')
                            .proxy('http://dc-ty3-squid-1.cb.local:3128')
                            .send({
                                "app": 355,
                                "record": {
                                    "数値": { "value": "123456" }
                                }
                            })
                            .end(function (err, res) {
                                console.log(res.body);
                                expect(res.status).to.eql(200)//告诉mocha结束测试

                            })