let api = require('tcb-api-rest');
let assert = api.assert;

class PuttingUsers {

    constructor(header, body) {
        this._header = header;
        this._body = body;
        this._response = '';
    }

    putUsers() {
        this._response = api.put(this._header, this._body);
        return this;
    }

    putUsersSuccess() {
        assert.assertStatusCode(this._response, '200');
    }
}
module.exports = PuttingUsers;