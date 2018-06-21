// let api = require('/APIs/records.js');
request = require('superagent');
require('superagent-proxy')(request);
var expect = require('chai').expect;
var assert = require('power-assert');
var body = require('./data/app.json')

let appid = require('./App_Create.js')
let app = require('./App_Create.js')
let describe = require('./App_Create.js')
let createApp = require('./App_Create.js')

function printAppID(appid){
    console.log("******** callback " + appid)
}
createApp(printAppID)
// console.log(createApp.appid)
console.log('createApp.appid')
//应用成功
