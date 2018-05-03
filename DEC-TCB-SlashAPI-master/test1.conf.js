exports.config = {

    'suites': {
        'adding_Users': ['src/test_scripts/users/AddingUsers.js'],
        'putting_Users': ['src/test_scripts/users/PuttingUsers.js']
    },
    'reporters': [
        'junit','dot'
    ],
    'reporterOptions': {
        'junit': {
            'outputDir': 'reports/',
            outputFileFormat: function(opts) { // optional
                return `TestResults_${opts.config.suite}.xml`;}
        }
    },

    'framework': 'mocha',
    'mochaOpts': {
        'ui': 'bdd',
        'timeout': 600000
    },

    before: (test) => {
        global.baseUrl = process.env.BASE_URL;
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
