let api = require('tcb-api-rest');
let assert = api.assert;

class AddingCustomItem {

    constructor(header, body) {
        this._header = header;
        this._body = body;
        this._response = '';
    }

    addCustomItem() {
        this._response = api.post(this._header, this._body);
        return this;
    }

    addCustomItemSuccess() {
        assert.assertStatusCode(this._response, '200');
    }
}
module.exports = AddingCustomItem;