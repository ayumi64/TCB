var assert = require('assert');
var browser = browserName;


describe('lorem imsum', function() {
   it('test page title', function () {
       browser.url('http://lipsum.com/');
       var title = browser.getTitle();
       assert.equal(title, 'Lorem Ipsum - All the facts - Lipsum generator');
   });
});