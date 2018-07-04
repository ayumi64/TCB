request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');
let Create = require('./Create.js')


class AppDeploy {

    constructor() {
    }

    Field(done) {
        let appid = require('../data/id.json');
        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/form/fields.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "app": appid.app,
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
                if (err) console.log(err);
                expect(res.status).to.eql(200)
                console.log(res.body);
            })
        return this;
    }

    Deploy(done) {
        let appid = require('../data/id.json');
        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "apps": [
                    {
                        "app": appid.app
                    }
                ]
            })
            .end(function (err, res) {
                if (err) console.log(err);
                console.log(res.body);
                expect(res.status).to.eql(200)
            })
        return this;
    }
}


module.exports = AppDeploy;