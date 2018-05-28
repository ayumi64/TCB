let api = require('tcb-api-rest');
let assert = api.assert;

class AddingUsers {

    constructor(header, body) {
        this._header = header;
        this._body = body;
        this._response = '';
    }

    addUsers() {
        this._response = api.post(this._header, this._body);
        return this;
    }

    verifyInCaseOfWrongPassword(result) {
        assert.assertStatusCode(this._response, result.statusCode);
        assert.assertEqual(this._response.body.code, result.errorCode);
        assert.assertEqual(this._response.body.message, result.message);
    }

    addUsersSuccess() {
        assert.assertStatusCode(this._response, '200');
    }
}
module.exports = AddingUsers;