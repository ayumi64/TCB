request = require('superagent');
var host = require('../host/host.js')

record = (host+'/k/v1/record.json');

module.exports = record;
