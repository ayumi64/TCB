request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');
let body = require('../data/app.json')
fs = require('fs');

let appid = require('../data/id.json');
request.get('https://yhgao.cybozu-dev.com/k/v1/preview/app/deploy.json')
    .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
    .set('Content-Type', 'application/json')
    .proxy('http://dc-ty3-squid-1.cb.local:3128')
    .send({
        "apps": [appid.app]
    })
    .end(function (err, res) {


        console.log(res.body);
    })