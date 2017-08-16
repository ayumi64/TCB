var supertest = require('supertest'),
    api = supertest('https://yhgao.cybozu-dev.com/k/v1/records.json');

module.exports = api;
