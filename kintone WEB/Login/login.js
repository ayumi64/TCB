var assert = require('assert');
var webdriverjs = require('webdriverio');

describe('kintone login', function () {

    it('should have the right title', function () {
		browser.url('https://ocean.cybozu-dev.com/login?saml=off');
        browser.setValue('//*[@id="username-:0-text"]', 'yhgao')
        browser.setValue('//*[@id="password-:1-text"]', 'cybozu2016')
        browser.click('//*[@id="login-form-outer"]/form/div[4]/div[2]/input')
        .pause(3000)
        browser.click('/html/body/div[5]/div/div[1]/div/a/img')
        .pause(3000)
        var title = browser.getTitle();
        assert.equal(title, 'ポータル');
	});
    });
