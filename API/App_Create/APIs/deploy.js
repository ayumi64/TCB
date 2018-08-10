var request = require('superagent');
var host = require('../../../Test/API/host.js')

deploy =  (host+'/k/v1/preview/app/deploy.json');

module.exports = deploy;
