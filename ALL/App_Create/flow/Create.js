request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');
var body = require('../data/app.json')

request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')
    .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
    .set('Content-Type', 'application/json')
    .proxy('http://dc-ty3-squid-1.cb.local:3128')
    .send(body)
    .end(function (err, res) {
        console.log(res.body);
        expect(res.status).to.eql(200)//告诉mocha结束测试
        let appid = res.body.app
        console.log(appid)

        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/form/fields.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "app": appid,
                "properties": {
                    "文字列__1行_": {
                        "code": "文字列__1行_",
                        "defaultValue": "",
                        "expression": "",
                        "hideExpression": false,
                        "maxLength": '',
                        "minLength": '',
                        "label": "文字列 (1行)",
                        "noLabel": false,
                        "required": false,
                        "type": "SINGLE_LINE_TEXT",
                        "unique": true
                    },
                    "数値": {
                        "code": "数値",
                        "defaultValue": "12345",
                        "digit": true,
                        "displayScale": "",
                        "expression": "",
                        "maxValue": '',
                        "minValue": '',
                        "label": "数値",
                        "noLabel": true,
                        "required": false,
                        "type": "NUMBER",
                        "unique": false,
                        "unit": "$",
                        "unitPosition": "BEFORE"
                    }

                }
            })
            .end(function (err, res) {
                console.log(res.body)
                expect(res.status).to.eql(200)//告诉mocha结束测试

                request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
                    .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                    .set('Content-Type', 'application/json')
                    .proxy('http://dc-ty3-squid-1.cb.local:3128')
                    .send({
                        "apps": [
                            {
                                "app": appid
                            }
                        ]
                    })
                    .end(function (err, res) {
                        console.log(res.body);
                        expect(res.status).to.eql(200)//告诉mocha结束测试

                        setTimeout(function () {
                            request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')
                                .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                                .set('Content-Type', 'application/json')
                                .proxy('http://dc-ty3-squid-1.cb.local:3128')
                                .send({
                                    "app": appid,
                                    "record": {
                                        "数値": { "value": "123456" }
                                    }
                                })
                                .end(function (err, res) {
                                    console.log(res.body);
                                    expect(res.status).to.eql(200)//告诉mocha结束测试
                                })
                        },5000);
                        
                    })
            })
    })
