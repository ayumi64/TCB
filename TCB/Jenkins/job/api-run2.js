//For Run All
require('shelljs/global');
let testconf = require('../../test2.conf.js');
let suites = testconf.config.suites;
for (let key in suites) {
    if (exec('npm test test2.conf.js -- --suite ' + key).code !== 0) {
        echo('Error: npm test failed');
        exit(1);
    }
    console.log(key);
}