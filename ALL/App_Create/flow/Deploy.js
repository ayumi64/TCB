request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');
let Create = require('./Create.js')
var host = require('../host/host.js')
var fields = require('../APIs/fields')
var deploy = require('../APIs/deploy')

class AppDeploy {

    constructor() {
    }

    Field() {
        let appid = require('../data/id.json');
        request.post(host+fields)
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send({
                "app": appid.app,
                "revision": 2,
                "properties": {
                    "文字列__1行_": {
                        "code": "文字列__1行_",
                        "defaultValue": "",
                        "expression": "",
                        "hideExpression": false,
                        "maxLength": 64,
                        "minLength": 0,
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
                        "maxValue": "",
                        "minValue": "",
                        "label": "数値",
                        "noLabel": true,
                        "required": false,
                        "type": "NUMBER",
                        "unique": false,
                        "unit": "$",
                        "unitPosition": "BEFORE"
                    },
                    "ラジオボタン": {
                        "code": "ラジオボタン",
                        "defaultValue": "sample2",
                        "label": "ラジオボタン",
                        "noLabel": false,
                        "options": {
                            "sample1": {
                                "label": "sample1",
                                "index": 0
                            },
                            "sample2": {
                                "label": "sample2",
                                "index": 1
                            },
                            "sample3": {
                                "label": "sample3",
                                "index": 2
                            }
                        },
                        "align": "horizontal",
                        "required": false,
                        "type": "RADIO_BUTTON"
                    },
                    "チェックボックス": {
                        "code": "チェックボックス",
                        "defaultValue": [
                            "sample1",
                            "sample3"
                        ],
                        "label": "チェックボックス",
                        "noLabel": false,
                        "options": {
                            "sample1": {
                                "label": "sample1",
                                "index": 0
                            },
                            "sample2": {
                                "label": "sample2",
                                "index": 2
                            },
                            "sample3": {
                                "label": "sample3",
                                "index": 1
                            }
                        },
                        "align": "horizontal",
                        "required": false,
                        "type": "CHECK_BOX"
                    },
                    "日付": {
                        "code": "日付",
                        "defaultNowValue": true,
                        "defaultValue": "",
                        "label": "日付",
                        "noLabel": false,
                        "required": false,
                        "type": "DATE",
                        "unique": false
                    },
                    "日時": {
                        "code": "日時",
                        "defaultNowValue": false,
                        "defaultValue": "2012-07-19T00:00:00.000Z",
                        "label": "日時",
                        "noLabel": false,
                        "required": false,
                        "type": "DATETIME",
                        "unique": false
                    },
                    "添付ファイル": {
                        "code": "添付ファイル",
                        "label": "添付ファイル",
                        "noLabel": true,
                        "required": false,
                        "type": "FILE",
                        "thumbnailSize": "150"
                    },
                    "リンク": {
                        "code": "リンク",
                        "defaultValue": "http://hoge.xxx",
                        "maxLength": 64,
                        "minLength": 0,
                        "label": "リンク",
                        "noLabel": true,
                        "protocol": "WEB",
                        "required": false,
                        "type": "LINK",
                        "unique": false
                    },
                    "ユーザー選択": {
                        "code": "ユーザー選択",
                        "label": "ユーザー選択",
                        "noLabel": true,
                        "required": false,
                        "type": "USER_SELECT",
                        "entities": [
                            {
                                "code": "cybozu",
                                "type": "USER"
                            },
                            {
                                "code": "everyone",
                                "type": "GROUP"
                            }
                        ],
                        "defaultValue": [
                            {
                                "code": "cybozu",
                                "type": "USER"
                            },
                            {
                                "code": "everyone",
                                "type": "GROUP"
                            },
                            {
                                "code": "LOGINUSER()",
                                "type": "FUNCTION"
                            }
                        ]
                    },
                    "グループ選択": {
                        "code": "グループ選択",
                        "label": "グループ選択",
                        "noLabel": true,
                        "required": false,
                        "type": "GROUP_SELECT",
                        "entities": [
                            {
                                "code": "everyone",
                                "type": "GROUP"
                            }
                        ],
                        "defaultValue": [
                            {
                                "code": "everyone",
                                "type": "GROUP"
                            }
                        ]
                    },
                    "グループ": {
                        "code": "グループ",
                        "label": "グループ",
                        "noLabel": true,
                        "type": "GROUP",
                        "openGroup": true
                    },
                    "サブテーブル": {
                        "code": "サブテーブル",
                        "type": "SUBTABLE",
                        "fields": {
                            "文字列__1行_サブテーブル": {
                                "code": "文字列__1行_サブテーブル",
                                "defaultValue": "",
                                "expression": "",
                                "hideExpression": false,
                                "maxLength": 64,
                                "minLength": 0,
                                "label": "文字列 (1行)サブテーブル",
                                "noLabel": false,
                                "required": false,
                                "type": "SINGLE_LINE_TEXT",
                                "unique": false
                            }
                        }
                    }
                }
            })
            .end(function (err, res) {
                if (err) console.log(err);
                expect(res.status).to.eql(200)
                console.log(res.body);
               // done();   这里不要done
            })
    }

    Deploy(done) {
        let appid = require('../data/id.json');
        request.post(deploy)
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
                done();   //ensure done is called
            })
    }
}


module.exports = AppDeploy;