var assert = require('assert');
var webdriverjs = require('webdriverio');
var HttpsProxyAgent = require('https-proxy-agent');

var superagent = require('superagent');
request = require('superagent');
require('superagent-proxy')(request);


var proxy = process.env.http_proxy || 'http://dc-ty3-squid-1.cb.local:3128';
console.log('using proxy server %j', proxy);

describe('kintone login', function () {
    it('should have the right title', function () {
        superagent.proxy('http://dc-ty3-squid-1.cb.local:3128')
		browser.url('https://ocean.cybozu-dev.com/login?saml=off');
        browser.setValue('//*[@id="username-:0-text"]', 'yhgao')
        browser.setValue('//*[@id="password-:1-text"]', 'cybozu200212')
        browser.click('//*[@id="login-form-outer"]/form/div[4]/div[2]/input')
        .pause(3000)
        browser.click('/html/body/div[5]/div/div[1]/div/a/img')
        .pause(3000)
        var title = browser.getTitle();
        assert.equal(title, 'ポータル');
	});
    });
