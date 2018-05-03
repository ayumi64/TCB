let api = require('tcb-api-rest');
let assert = api.assert;

class PuttingServices {

    constructor(header, body) {
        this._header = header;
        this._body = body;
        this._response = '';
    }

    putServices() {
        this._response = api.put(this._header, this._body);
        return this;
    }

    putServicesSuccess() {
        assert.assertStatusCode(this._response, '200');
    }
}
module.exports = PuttingServices;