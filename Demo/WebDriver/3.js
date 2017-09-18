var assert = require('assert');
var webdriverio = require('webdriverio');
var Launcher = require('webdriverio').Launcher;

describe('google page', function() {

	it('should have the right title', function () {
		browser.url('https://www.google.com');
		var title = browser.getTitle();
		assert.equal(title, 'Google');
	});
});

//使用wdio wdio.conf.js