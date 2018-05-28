var assert = require('assert');
var webdriverjs = require('webdriverio');

describe('kintone login', function () {

    it('should have the right title', function () {
        browser.url('https://github.com/login');
        browser.setValue('//*[@id="login_field"]', 'sonic64@qq.com')
        browser.setValue('//*[@id="password"]', '56749154a')
        browser.click('//*[@id="login"]/form/div[3]/input[3]')
        .pause(3000)
        .pause(3000)
        var title = browser.getTitle();
        assert.equal(title, 'Github');
	});
    });
