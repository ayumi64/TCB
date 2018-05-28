let CSV = require('comma-separated-values');
let api = require('tcb-api-rest');
let assert = api.assert;

class GettingServices {

    constructor(header) {
        this._header = header;
        this._response = '';
    }

    getServices() {
        this._response = api.get(this._header);
        return this;
    }

    isServicesExist(servicesData) {
        // All User's CSV data convert to JSON data.
        let res = this._response.resp.body;
        let resUsers = new CSV(res, {header: ['code', 's1', 's2', 's3', 's4', 's5']}).parse();

        // Find user's index number.
        let resUserNum = resUsers.findIndex(c => c.code === servicesData.code);

        // If user's services is equal to expected.
        delete resUsers[resUserNum].code;
        let resUserSercices = Object.keys(resUsers[resUserNum]).map(key => resUsers[resUserNum][key]).filter(val => val !== 'undefined');
        assert.assertEqual(JSON.stringify(servicesData.services.sort()), JSON.stringify(resUserSercices.sort()));
    }
}
module.exports = GettingServices;