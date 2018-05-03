let api = require('tcb-api-rest');
let assert = api.assert;

class PuttingUsersCodes {

    constructor(header, body) {
        this._header = header;
        this._body = body;
        this._response = '';
    }

    putUsersCodes() {
        this._response = api.put(this._header, this._body);
        return this;
    }

    putUsersCodesSuccess() {
        assert.assertStatusCode(this._response, '200');
    }
}
module.exports = PuttingUsersCodes;