var supertest = require('supertest'),
    api = supertest('https://yhgao.cybozu-dev.com/k/v1/record.json');

module.exports = api;
