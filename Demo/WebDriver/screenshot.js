var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
  .remote(options)
  .init()
  .url('http://baidu.com')
  .saveScreenshot('buddyworks.png') 
  .end();