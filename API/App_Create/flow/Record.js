
fs = require('fs');

var record = require('../APIs/record')
let appid = require('../data/id.json');

request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');
let Create = require('./Create.js')
var host = require('../../../Test/API/host.js')
var fields = require('../APIs/fields')
var deploy = require('../APIs/deploy')
var path = require('path');

class Record {

    constructor() {
    }

    Add(done) {
        let appid = require('../data/id.json');
        //console.log(appid.app)
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
                console.log(res.body);
                expect(res.status).to.eql(200)
                fs.writeFileSync(path.join(__dirname,'../data/record.json'), '{' + '"id":' + res.body.id + '}')
                done();   //ensure done is called
            })
    }
}

module.exports = Record;