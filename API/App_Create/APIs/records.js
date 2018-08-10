var request = require('superagent');
var host = require('../../../Test/API/host.js')

records = (host+'/k/v1/records.json');

module.exports = records;
