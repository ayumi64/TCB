let AddingUsers = require('../../test_flows/users/AddingUsers');
let PuttingServices = require('../../test_flows/services/PuttingServices');
let GettingServices = require('../../test_flows/services/GettingServices');
let InitializeDatabase = require('../../utils/initializeDatabase');
let ExecSlashAdminFullsync = require('../../utils/slashAdminFullsync');

describe('Putting User Use Services', () => {

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
    let bodyAddTest19 = require('../../../resources/test_data/users/add/TEST-19.json');

    // Use at PuttingServices()
    let header = require('../../../resources/test_data/services/put/Headers.json');
    let bodyTest19 = require('../../../resources/test_data/services/put/TEST-19.json');

    // Use at GettingServices()
    let headerGet = require('../../../resources/test_data/services/get/Headers.json');
    let userDataTest19 = require('../../../resources/test_data/services/get/expectedResults/userData_TEST-19.json');

    it('OFFICIALAPITEST-19: Putting user\'s service code is Security SQL1', () => {
        headerAdd.url = baseUrl + headerAdd.url;
        new AddingUsers(headerAdd, bodyAddTest19)
            .addUsers()
            .addUsersSuccess();

        header.url = baseUrl + header.url;
        new PuttingServices(header, bodyTest19)
            .putServices()
            .putServicesSuccess();

        headerGet.url = baseUrl + headerGet.url;
        new GettingServices(headerGet)
            .getServices()
            .isServicesExist(userDataTest19);
    });
});