exports.config = {
    
    
    
        /**
    
         * server configurations
    
         */


      //  services: ['selenium-standalone'],
        host: '127.0.0.1',
        port: 4444,

        /**
    
         * specify test files
    
         */
    
        specs: [
    
            './App_Create/flow/es.js'
    
        ],
    
    
    
    
        /**
    
         * capabilities
    
         */
    
        capabilities: [ {
    
            browserName: 'chrome'
    
        }],
    
        framework: 'mocha',
        mochaOpts: {
            timeout: 200000
        },

      // ...
      waitforTimeout: 150000,
      // ...
    
        /**
    
         * test configurations
    
         */
    
        logLevel: 'silent',
    
        coloredLogs: true,
    
        screenshotPath: 'shots',
    
        baseUrl: '',
    
        waitforTimeout: 10000,
    
        framework: 'mocha',
    
    
    
        reporters: ['dot'],
    
        reporterOptions: {
    
            outputDir: './'
    
        },
    
    
    
        mochaOpts: {
    
            ui: 'bdd'
    
        },
    
    
    
        /**
    
         * hooks
    
         */
    
        onPrepare: function() {
    
            console.log('Yhgao\'s Test let\'s go');
    
        },
    
        onComplete: function() {
    
            console.log('that\'s ok');
    
        },

        before: function() {
            var chai = require('chai');
            global.expect = chai.expect;
            chai.Should();
        }
    
    };