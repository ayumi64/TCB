var App_Create = require('./Create')
var App_Deploy = require('./Deploy')

request = require('superagent');
require('superagent-proxy')(request);
let expect = require('chai').expect;
let assert = require('power-assert');

describe('Kintone App Create Test', function () {

    before('App Create', function (done) {
        var Add = new App_Create
        Add.Create(done);

    })

    it('App Create', function (done) {
        var Dep = new App_Deploy

        setTimeout(function () {
            Dep.Deploy(done);
        }, 3000);

        Dep.Field();
    })


})


/*
setTimeout(function(){
    console.log(1000000000);
},0);
*/
