exports.config = {

    'suites': {
        'adding_Users': ['src/test_scripts/users/AddingUsers.js'],
        'putting_Services': ['src/test_scripts/services/PuttingServices.js'],
        'putting_Users': ['src/test_scripts/users/PuttingUsers.js'],
        'deleting_Users': ['src/test_scripts/users/DeletingUsers.js']
    },

    'reporters': [
        'junit'
    ],
    'reporterOptions': {
        'junit': {
            'outputDir': 'reports'
        }
    },

    'framework': 'mocha',
    'mochaOpts': {
        'ui': 'bdd',
        'timeout': 600000
    },

    before: (test) => {
        global.baseUrl = "https://yhgao.cybozu-dev.com";
    },

    beforeTest: (test) => {
        console.log('[TEST CASE]:', test.title);
    },

    afterTest: (test) => {
        if (test.passed === true) {
            console.log('\t', '--> [STATUS]:', 'PASSED');
        } else {
            console.log('\t', '--> [STATUS]:', 'FAILED');
        }
    }
};