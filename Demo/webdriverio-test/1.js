var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options)
    .init()
    browser.pause(3000)
    .url('http://www.google.com')
    browser.pause(3000)
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end();