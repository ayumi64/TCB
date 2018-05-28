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
    let bodyAddTest17 = require('../../../resources/test_data/users/add/TEST-17.json');
    let bodyAddTest18 = require('../../../resources/test_data/users/add/TEST-18.json');
    let bodyAddTest14 = require('../../../resources/test_data/users/add/TEST-14.json');

    // Use at PuttingServices()
    let header = require('../../../resources/test_data/services/put/Headers.json');
    let bodyTest19 = require('../../../resources/test_data/services/put/TEST-19.json');
    let bodyTest17 = require('../../../resources/test_data/services/put/TEST-17.json');
    let bodyTest18 = require('../../../resources/test_data/services/put/TEST-18.json');
    let bodyTest14 = require('../../../resources/test_data/services/put/TEST-14.json');

    // Use at GettingServices()
    let headerGet = require('../../../resources/test_data/services/get/Headers.json');
    let userDataTest19 = require('../../../resources/test_data/services/get/expectedResults/userData_TEST-19.json');
    let userDataTest17 = require('../../../resources/test_data/services/get/expectedResults/userData_TEST-17.json');
    let userDataTest18 = require('../../../resources/test_data/services/get/expectedResults/userData_TEST-18.json');
    let userDataTest14 = require('../../../resources/test_data/services/get/expectedResults/userData_TEST-14.json');
    
    //add user(code is Security SQL1),then put user's services
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

    //add user(code is 半角カナ),then put user's services
    it('OFFICIALAPITEST-17: Putting user\'s service code is 半角カナ', () => {
        new AddingUsers(headerAdd, bodyAddTest17)
            .addUsers()
            .addUsersSuccess();

        new PuttingServices(header, bodyTest17)
            .putServices()
            .putServicesSuccess();
      
        new GettingServices(headerGet)
            .getServices()
            .isServicesExist(userDataTest17);
    });

    //add user(code is Security JS2),then put user's services
    it('OFFICIALAPITEST-18: Putting user\'s service code is Security JS2', () => {
        new AddingUsers(headerAdd, bodyAddTest18)
            .addUsers()
            .addUsersSuccess();

        new PuttingServices(header, bodyTest18)
            .putServices()
            .putServicesSuccess();

        new GettingServices(headerGet)
            .getServices()
            .isServicesExist(userDataTest18);
    });

    //add user(code is Single-byte symbols),then put user's services
    it('OFFICIALAPITEST-14: Putting user\'s service code is Single-byte symbols', () => {
        new AddingUsers(headerAdd, bodyAddTest14)
            .addUsers()
            .addUsersSuccess();

        new PuttingServices(header, bodyTest14)
            .putServices()
            .putServicesSuccess();

        new GettingServices(headerGet)
            .getServices()
            .isServicesExist(userDataTest14);
    });
});