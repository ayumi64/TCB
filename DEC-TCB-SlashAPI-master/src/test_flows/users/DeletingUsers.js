let api = require('tcb-api-rest');
let assert = api.assert;

class DeletingUsers {

    constructor(header, body) {
        this._header = header;
        this._body = body;
        this._response = '';
    }

    deleteUsers() {
        this._response = api.delete(this._header, this._body);
        return this;
    }

    deleteUsersSuccess() {
        assert.assertStatusCode(this._response, 200);
    }
}
module.exports = DeletingUsers;