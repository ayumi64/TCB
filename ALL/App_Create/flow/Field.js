var Create = require('./CreateAPI.js')
request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');
var body = require('../data/app.json')


var CreateAPI  =  function () {
        request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send(body)
            .end(function (err, res) {
                if (err) return done(err);


     console.log(res.body)
     let appid = res.body.app
     console.log(res.body.app)

}
            )}


Create();

let Create_App = new Create

 
console.log(Create.appid)