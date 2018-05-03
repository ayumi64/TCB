let AddingUsers = require('../../test_flows/users/AddingUsers');
let GettingUsers = require('../../test_flows/users/GettingUsers');
let AddingCustomItem = require('../../test_flows/customItems/AddingCustomItem');
let InitializeDatabase = require('../../utils/initializeDatabase');
let ExecSlashAdminFullsync = require('../../utils/slashAdminFullsync');

describe('Adding Users With Wrong Password', () => {

    let header = require('../../../resources/test_data/users/add/Headers.json');
    let bodyTest31 = require('../../../resources/test_data/users/add/TEST-31.json');
    let bodyTest30 = require('../../../resources/test_data/users/add/TEST-30.json');
    let bodyTest29 = require('../../../resources/test_data/users/add/TEST-29.json');
    let bodyTest28 = require('../../../resources/test_data/users/add/TEST-28.json');
    let result = require('../../../resources/test_data/users/add/addWrongPasswordResults.json');

    it('OFFICIALAPITEST-31: Adding users with wrong password Beer🍺', () => {
        // Override the url based on global url in the test.conf.js file
        header.url = baseUrl + header.url;
        new AddingUsers(header, bodyTest31)
            .addUsers()
            .verifyInCaseOfWrongPassword(result);
    });

    it('OFFICIALAPITEST-30: Adding users with wrong password Sushi🍣', () => {
        new AddingUsers(header, bodyTest30)
            .addUsers()
            .verifyInCaseOfWrongPassword(result);
    });

    it('OFFICIALAPITEST-29: Adding users with wrong password Smile☺', () => {
        new AddingUsers(header, bodyTest29)
            .addUsers()
            .verifyInCaseOfWrongPassword(result);
    });

    it('OFFICIALAPITEST-28: Adding users with wrong password Hokke𩸽', () => {
        new AddingUsers(header, bodyTest28)
            .addUsers()
            .verifyInCaseOfWrongPassword(result);
    });
});

describe('Adding Users Success', () => {
    // Use at AddingCustomItem()
    let headerCustomItem = require('../../../resources/test_data/customItems/add/Headers.json');
    let bodyCustomItem = require('../../../resources/test_data/customItems/add/body.json');

    // Use at AddingUsers()
    let header = require('../../../resources/test_data/users/add/Headers.json');
    let bodyTest22 = require('../../../resources/test_data/users/add/TEST-22.json');
    let bodyTest1 = require('../../../resources/test_data/users/add/TEST-1.json');

    // Use at GettingUsers()
    let headerGet = require('../../../resources/test_data/users/get/Headers.json');
    let userDataTest22 = require('../../../resources/test_data/users/get/expectedResults/userData_TEST-22.json');
    let userDataTest1 = require('../../../resources/test_data/users/get/expectedResults/userData_TEST-1.json');

    before(() => {
        // Initialize Database
        let db = new InitializeDatabase();
        let s = new ExecSlashAdminFullsync();

        return db.initialize().then(() => {
            console.log('InitializeDatabase done. Fullsync start.');
            s.fullSyncPromise();
        });
    });

    before(() => {
        // add custom item
        headerCustomItem.url = baseUrl + headerCustomItem.url;
        new AddingCustomItem(headerCustomItem, bodyCustomItem)
            .addCustomItem()
            .addCustomItemSuccess();
    });

    it('OFFICIALAPITEST-22: Adding user with Security SQL1', () => {
        new AddingUsers(header, bodyTest22)
            .addUsers()
            .addUsersSuccess();

        headerGet.url = baseUrl + headerGet.url;
        new GettingUsers(headerGet)
            .isUsersExist(userDataTest22)
            .userLogin(userDataTest22);
    });

    it('OFFICIALAPITEST-1: 複数ユーザー追加(半角英数)', () => {
        new AddingUsers(header, bodyTest1)
            .addUsers()
            .addUsersSuccess();

        new GettingUsers(headerGet)
            .isUsersExist(userDataTest1)
            .userLogin(userDataTest1);
    });
});