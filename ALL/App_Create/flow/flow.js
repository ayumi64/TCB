let api = require('../APIs/records');
let assert = api.assert;
    request = require('superagent');
require('superagent-proxy')(request);


class testAPI {

    constructor(header) {
        this._header = header;
        this._response = '';
    }

    apiGetData() {
        this._response = api.get(this._header);
        return this;
    }

    apiTest() {
        let header = JSON.parse(this._response.resp.body).records[i].header.value;
        let body = JSON.parse(this._response.resp.body).records[i].body.value;

        let recordLength = JSON.parse(this._response.resp.body).records.length;
        let httpMethod = JSON.parse(this._response.resp.body).records[i].httpMethod.value;
        let expectResult = JSON.parse(this._response.resp.body).records[i].result.value;
        let result;

        result = api.post(JSON.parse(header), JSON.parse(body));
        console.log(result.resp.statusCode);
        console.log(result);
        assert.assertStatusCode(result, JSON.parse(expectResult).statusCode);
    }
}


module.exports = APItest;