request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');
var body = require('../../API/App_Create/data/app.json')



describe('KINTONE-13122', () => {

    it('数値フィールドに「1e123456789012」のような値を保存すると、#CONVERT!と表示される', (done) => {

    request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')
        .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
        .set('Content-Type', 'application/json')
        .proxy('http://dc-ty3-squid-1.cb.local:3128')
        .send(body)
        .end(function (err, res) {
            console.log(res.body);
            expect(res.status).to.eql(200)
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
                    expect(res.status).to.eql(200)
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
                            expect(res.status).to.eql(200)

                            setTimeout(function () {
                                request.post('https://yhgao.cybozu-dev.com/k/v1/record.json')
                                    .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                                    .set('Content-Type', 'application/json')
                                    .proxy('http://dc-ty3-squid-1.cb.local:3128')
                                    .send({
                                        "app": appid,
                                        "record": {
                                            "数値": { "value": "1e123456789012" }
                                        }
                                    })
                                    .end(function (err, res) {
                                        console.log(res.body);
                                        let id = res.body.id;
                                        expect(res.status).to.eql(200)

                                        request.get('https://yhgao.cybozu-dev.com/k/v1/record.json')
                                        .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                                        .set('Content-Type', 'application/json')
                                        .proxy('http://dc-ty3-squid-1.cb.local:3128')
                                        .send({
                                            "app": appid,
                                            "id": id
                                            })
                                        .end(function (err, res) {
                                            console.log(res.body);
                                            expect(res.status).to.eql(200)
                                            expect(res.body.record.数値.value).to.eql('')
                                            console.log('数值为空')       
                                       done();                                 
                                        })
                                    })
                            }, 3000);

                        })
                })
        })
}) })


//  mocha -t 60000 KINTONE-13122.js