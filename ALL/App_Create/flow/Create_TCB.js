request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');
var body = require('../data/app.json')


class CreateApp {

    constructor(header, body) {
        this._header = header;
        this._body = body;
        this._response = '';
    }

 create () {
    this._response = api.post(this._header, this._body);
    return this;
 }

 field() {
    this._response = api.post(this._header, this._body);
    return this;
 }

 deploy() {
    this._response = api.post(this._header, this._body);
    return this;
 }

}
 module.exports = CreateApp;