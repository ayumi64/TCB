var App_Create = require('../../API/App_Create/flow/Create')
var App_Deploy = require('../../API/App_Create/flow/Deploy')


request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');

describe('KINTONE-12440', function () {

    before('App Add', function (done) {
        var Add = new App_Create
        Add.Create(done);
    })

    it('App Deploy', function (done) {
        var Dep = new App_Deploy

        setTimeout(function () {
            Dep.Deploy(done);
        }, 1000);
        Dep.Field();
    })

    it('RESTAPIで、entitiesパラメータの配列内にnullを指定すると不正なリクエストになる ', function (done) {

        setTimeout(function () {

            let appid = require('../../API/App_Create/data/id.json')
            let acl = require('../../API/App_Manage/APIs/acl.js')

            console.log(appid.app)

            request.put(acl)
                .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
                .set('Content-Type', 'application/json')
                .proxy('http://dc-ty3-squid-1.cb.local:3128')
                .send({
                    "app": appid.app,
                    "rights": [
                        {
                            "entities": [ null ]
                        }
                    ]
                })
                .end(function (err, res) {
                    console.log(res.body);
                    console.log(res.status);
                    expect(res.status).to.eql(520)
                    expect(res.body.message).to.eql('不正なリクエストです。')
                    expect(res.body.code).to.eql('CB_IL02')
                    done();
                })

        }, 5000);
    })

})


//command： mocha -t 15000  test.js 
