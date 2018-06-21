var request = require('superagent');
var host = require('../hots/host.js')

    records = superagent(host+'/k/v1/records.json');

module.exports = records;
