let DeletingUsers = require('../../test_flows/users/DeletingUsers');
let AddingUsers = require('../../test_flows/users/AddingUsers');
let GettingUsers = require('../../test_flows/users/GettingUsers');
let InitializeDatabase = require('../../utils/initializeDatabase');
let ExecSlashAdminFullsync = require('../../utils/slashAdminFullsync');

describe('Deleting Users', () => {

    // Use at AddingUsers()
    let headerAdd = require('../../../resources/test_data/users/add/Headers.json');
    let bodyTest33Add = require('../../../resources/test_data/users/add/TEST-33.json');

    // Use at GettingUsers()
    let headerGet = require('../../../resources/test_data/users/get/Headers.json');
    let expectResultTest33 = require('../../../resources/test_data/users/get/expectedResults/userData_TEST-33.json');

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
        headerAdd.url = baseUrl + headerAdd.url;
        new AddingUsers(headerAdd, bodyTest33Add)
            .addUsers()
            .addUsersSuccess();
    });

    // Use at DeletingUsers()
    let header = require('../../../resources/test_data/users/delete/Headers.json');
    let bodyTest33 = require('../../../resources/test_data/users/delete/TEST-33.json');

    it('OFFICIALAPITEST-33: Delete the specified user', () => {
        header.url = baseUrl + header.url;
        new DeletingUsers(header, bodyTest33)
            .deleteUsers()
            .deleteUsersSuccess();

        headerGet.url = baseUrl + headerGet.url;
        new GettingUsers(headerGet)
            .isUsersNotExist(expectResultTest33);
    });
});