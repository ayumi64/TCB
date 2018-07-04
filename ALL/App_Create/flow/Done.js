var App_Create = require('./Create.js')
var expect = require('chai').expect;

describe('Kintone App Create Test', function () {
    it('App Create', function (done) {
        var c = new App_Create
        c.Create(done)
        })
    })

