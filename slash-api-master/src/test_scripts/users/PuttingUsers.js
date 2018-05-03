let PuttingUsers = require('../../test_flows/users/PuttingUsers');
let GettingUsers = require('../../test_flows/users/GettingUsers');
let AddingUsers = require('../../test_flows/users/AddingUsers');
let InitializeDatabase = require('../../utils/initializeDatabase');
let ExecSlashAdminFullsync = require('../../utils/slashAdminFullsync');

describe('Putting Users', () => {

    before(() => {
        // Initialize Database
        let db = new InitializeDatabase();
        let s = new ExecSlashAdminFullsync();

        return db.initialize().then(() => {
            console.log('InitializeDatabase done. Fullsync start.');
            s.fullSyncPromise();
        });
    });

    // Use at AddingUsers()
    let headerAdd = require('../../../resources/test_data/users/add/Headers.json');
    let bodyAddTest34 = require('../../../resources/test_data/users/add/TEST-34.json');

    before(() => {
        headerAdd.url = baseUrl + headerAdd.url;
        new AddingUsers(headerAdd, bodyAddTest34)
            .addUsers()
            .addUsersSuccess();
    });

    // Use at PuttingUsers()
    let header = require('../../../resources/test_data/users/put/Headers.json');
    let bodyTest34 = require('../../../resources/test_data/users/put/TEST-34.json');

    // Use at GettingUsers()
    let userDataTest34 = require('../../../resources/test_data/users/get/expectedResults/userData_TEST-34.json');
    let headerGet = require('../../../resources/test_data/users/get/Headers.json');

    it('OFFICIALAPITEST-34: Putting user\'s surname is html', () => {
        header.url = baseUrl + header.url;
        new PuttingUsers(header, bodyTest34)
            .putUsers()
            .putUsersSuccess();

        headerGet.url = baseUrl + headerGet.url;
        new GettingUsers(headerGet)
            .isUsersSurnameExist(userDataTest34);
    });
});