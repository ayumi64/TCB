let PuttingUsersCodes = require('../../test_flows/usersCodes/PuttingUsersCodes');
let AddingUsers = require('../../test_flows/users/AddingUsers');
let GettingUsers = require('../../test_flows/users/GettingUsers');
let InitializeDatabase = require('../../utils/initializeDatabase');
let ExecSlashAdminFullsync = require('../../utils/slashAdminFullsync');

// Use at AddingUsers()
let headerAdd = require('../../../resources/test_data/users/add/Headers.json');
// Use at GettingUsers()
let headerGet = require('../../../resources/test_data/users/get/Headers.json');
// Use at PuttingUsersCodes()
let headerPutCodes = require('../../../resources/test_data/usersCodes/put/Headers.json');

describe('update user\'s information', () => {

    before(() => {
        // Initialize Database
        let db = new InitializeDatabase();
        let s = new ExecSlashAdminFullsync();

        return db.initialize().then(() => {
            console.log('InitializeDatabase done. Fullsync start.');
            s.fullSyncPromise();
        });
    });

    // add user
    let bodyAddTest36 = require('../../../resources/test_data/users/add/TEST-36.json');
    before(() => {
        headerAdd.url = baseUrl + headerAdd.url;
        new AddingUsers(headerAdd, bodyAddTest36)
            .addUsers()
            .addUsersSuccess();
    });

    it('OFFICIALAPITEST-36:ユーザーのコードの一括更新　newCodeが半角英数(user1->AZaz09)', () => {
        // Use at PuttingUsersCodes()
        let bodyTest36 = require('../../../resources/test_data/usersCodes/put/TEST-36.json');
        // Use at GettingUsers()
        let userDataTest36 = require('../../../resources/test_data/users/get/expectedResults/userData_TEST-36.json');
        // update user's code
        headerPutCodes.url = baseUrl + headerPutCodes.url;
        new PuttingUsersCodes(headerPutCodes, bodyTest36)
            .putUsersCodes()
            .putUsersCodesSuccess();

        // get user
        headerGet.url = baseUrl + headerGet.url;
        new GettingUsers(headerGet)
            .isUsersCodeExist(userDataTest36);
    });
});