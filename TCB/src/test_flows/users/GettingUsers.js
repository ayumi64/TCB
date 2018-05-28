let _ = require('lodash');

let api = require('tcb-api-rest');
let assert = api.assert;
let encode = require('../../utils/encode');

class GettingUsers {

    constructor(header) {
        this._header = header;
        this._response = '';
    }

    getUsers() {
        this._response = api.get(this._header);
        return this;
    }

    isUsersExist(userData) {
        this._response = api.get(this._header);
        let resUsersField = JSON.parse(this._response.resp.body).users;
        let expectedUserCode = userData.code;

        let resUsersNum = _.findIndex(resUsersField, (o) => {
            return o.code === expectedUserCode;
        });

        if (resUsersNum !== -1) {
            assert.assertEqual(userData.name, resUsersField[resUsersNum].name);
            assert.assertEqual(userData.surName, resUsersField[resUsersNum].surName);
            assert.assertEqual(userData.givenName, resUsersField[resUsersNum].givenName);
            assert.assertEqual(userData.surNameReading, resUsersField[resUsersNum].surNameReading);
            assert.assertEqual(userData.givenNameReading, resUsersField[resUsersNum].givenNameReading);
            assert.assertEqual(userData.localName, resUsersField[resUsersNum].localName);
            assert.assertEqual(userData.description, resUsersField[resUsersNum].description);
            assert.assertEqual(userData.phone, resUsersField[resUsersNum].phone);
            assert.assertEqual(userData.mobilePhone, resUsersField[resUsersNum].mobilePhone);
            assert.assertEqual(userData.extensionNumber, resUsersField[resUsersNum].extensionNumber);
            assert.assertEqual(userData.callto, resUsersField[resUsersNum].callto);
            assert.assertEqual(userData.employeeNumber, resUsersField[resUsersNum].employeeNumber);
            assert.assertEqual(userData.customItemValues[0].value, resUsersField[resUsersNum].customItemValues[0].value);
        } else {
            throw new assert.assertionError('[ERR] The response does NOT contains expected result in isUsersExist().');
        }
        return this;
    }

    isUsersSurnameExist(userData) {
        this._response = api.get(this._header);
        let resUsersField = JSON.parse(this._response.resp.body).users;
        let expectedUserCode = userData.code;

        let resUsersNum = _.findIndex(resUsersField, (o) => {
            return o.code === expectedUserCode;
        });

        if (resUsersNum !== -1) {
            assert.assertEqual(userData.surName, resUsersField[resUsersNum].surName);
        } else {
            throw new assert.assertionError('[ERR] The response does NOT contains expected result in isUsersSurnameExist().');
        }
        return this;
    }

    isUsersNotExist(userData) {
        this._response = api.get(this._header);
        let resUsersField = JSON.parse(this._response.resp.body).users;
        let expectedUserCode = userData.code;

        let resUsersNum = _.findIndex(resUsersField, (o) => {
            return o.code === expectedUserCode;
        });

        if (resUsersNum === -1) {
            assert.assertEqual(1, 1);
        } else {
            throw new assert.assertionError('[ERR] The response does NOT contains expected result in isUsersNotExist().');
        }
        return this;
    }

    // user exists by user's name
    isUsersNameExist(userData) {
        this._response = api.get(this._header);
        let resUsersField = JSON.parse(this._response.resp.body).users;
        let expectedUserCode = userData.code;
        let resUsersNum = _.findIndex(resUsersField, (o) => {
            return o.code === expectedUserCode;
        });
        if (resUsersNum !== -1) {
            assert.assertEqual(userData.name, resUsersField[resUsersNum].name);
        } else {
            throw new assert.assertionError('[ERR] The response does NOT contains expected result in isUsersNameExist().');
        }
        return this;
    }

    // user exists by user's code
    isUsersCodeExist(userData) {
        this._response = api.get(this._header);
        let resUsersField = JSON.parse(this._response.resp.body).users;
        let expectedUserCode = userData.code;
        let resUsersNum = _.findIndex(resUsersField, (o) => {
            return o.code === expectedUserCode;
        });
        if (resUsersNum !== -1) {
            assert.assertEqual(1, 1);
        } else {
            throw new assert.assertionError('[ERR] The response does NOT contains expected result in isUsersCodeExist().');
        }
        return this;
    }

    userLogin(userData) {
        let loginData = encode.base64(userData.code + ':' + userData.password);
        this._header.headers['X-Cybozu-Authorization'] = loginData;
        this._response = api.get(this._header);
        if (this._response.err === null) {
            assert.assertStatusCode(this._response, 200);
        } else {
            throw new assert.assertionError('[ERR] The response does NOT contains expected result in userLogin().');
        }
    }
}
module.exports = GettingUsers;