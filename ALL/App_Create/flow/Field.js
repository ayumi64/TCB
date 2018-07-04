request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');
var Create = require('./Create.js')

function AppFields(appid) {
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
        }
        )
}

module.exports = AppFields;