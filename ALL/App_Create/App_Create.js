// let api = require('/APIs/records.js');
request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');
var body = require('./data/app.json')


function createApp(callback){

     request.post('https://yhgao.cybozu-dev.com/k/v1/preview/app.json')
            .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
            .set('Content-Type', 'application/json')
            .proxy('http://dc-ty3-squid-1.cb.local:3128')
            .send(body)
            .end(function (err, res) {
                console.log(res.body);
                expect(res.status).to.eql(200)
                var appid = res.body.app; //return appid;
                // console.log(appid)
                callback(appid)
            })
        }
    
console.log(createApp)

module.exports = createApp;
//应用成功

