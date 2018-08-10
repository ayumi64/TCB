request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');
let body = require('../data/app.json')
fs = require('fs');
var path = require('path');
var create = require('../APIs/create')


class AppCreate {

    constructor() {
    }

    Create(done) {
        request.post(create)
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send(body)
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(200)
                fs.writeFileSync(path.join(__dirname,'../data/id.json'), '{' + '"app":' + res.body.app + '}')
                done();  //ensure done is called
            })
    }
}


module.exports = AppCreate;