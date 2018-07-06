request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let body = require('../data/app.json')
fs = require('fs');

var record = require('../APIs/record')

let appid = require('../data/id.json');

console.log(record)
request.post(record)
    .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
    .set('Content-Type', 'application/json')
    .proxy('http://dc-ty3-squid-1.cb.local:3128')
    .send({
        "app": appid.app,
        "record": {
            "数値": { "value": "12" }
        }
    })
    .end(function (err, res) {
        if (err) console.log(err);
        console.log(res.body);
        expect(res.status).to.eql(200)
        fs.writeFileSync('../data/record.json', '{' + '"id":' + res.body.id + '}')
       // done();   //ensure done is called
    })