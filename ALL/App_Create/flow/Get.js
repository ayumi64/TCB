var expect = require('chai').expect;
request = require('superagent');
require('superagent-proxy')(request);
var assert = require('power-assert');
var CreateAPI = require('../flow/Create')



CreateAPI(A)

describe('KINTONE', function () {

    it('Bug现象：', function () {

      function A(appid,id){
        console.log("**"+appid)    
        console.log("**"+id)  
        }

      request.get('https://yhgao.cybozu-dev.com/k/v1/record.json')
        .set('X-Cybozu-Authorization', 'Y3lib3p1OmN5Ym96dQ==')
        .set('Content-Type', 'application/json')
        .proxy('http://dc-ty3-squid-1.cb.local:3128')
        .send({
          "app": appid,
          "id": id
        }) 
    })
        .end(function (err, res) {

          console.log(res.body);
          expect(res.status).to.eql(520)
          expect(res.body.message).to.eql('CREATED_AT型のフィールドに値を設定することはできません。')
          done(); 
        })
    })

