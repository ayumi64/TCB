let LoginFlow = require('../../Login/flow/flow.js');
let TestData_Login = require('../../Login/data/data.js').dataMap;
let TestData_Space = require('../data/data.js').dataMap;
let SpaceCreate = require('../flow/flow.js')

describe('Kintone Login Test', function () {

    let testLogin = TestData_Login.get('login').info;
    let testSpaceCreate = TestData_Space.get('SpaceCreateMulti').info;

    it('Login', function () {

        let testFlow = new LoginFlow(testLogin)

        testFlow
            .openBrowser()
            .login()
    }),

        it('Space Title Test', function () {

            let testSpaceCreateFlow = new SpaceCreate(testSpaceCreate)

            testSpaceCreateFlow
                .Create()
                .verifyTittle()

        }
        )
});