let path = require('path');

exports.config = {

    "suites": {
        "testFromTestData": ["src/test_scripts/testFromTestData.js",],
        "testFromKinApp": ["src/test_scripts/testFromKinApp.js",]
    },

    "reporters": [
        "junit"
    ],
    "reporterOptions": {
        "junit": {
            "outputDir": "reports"
        }
    },

    "framework": "mocha",
    "mochaOpts": {
        "ui": "bdd",
        "timeout": 600000
    },

    before: (test) => {
        global.kinAppUrl = process.env.KIN_APP_URL;
        global.kinAppId = process.env.KIN_APP_ID;
    },

    beforeTest: (test) => {
        console.log('[TEST CASE]:', test.title);
    },

    afterTest: (test) => {
        if (test.passed === true)
            console.log("\t", '--> [STATUS]:', "PASSED");
        else console.log("\t", '--> [STATUS]:', "FAILED");
    }
};