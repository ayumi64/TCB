var assert = require('assert');
var webdriverjs = require('webdriverio');
var browser = {};
describe('JD Product Search', function () {
this.timeout(99999999);
before(function (done) {
browser = webdriverjs.remote({ desiredCapabilities: { browserName: 'chrome', IsJavaScriptEnabled: true } });
browser.init(done);
});
it('Product Search Check', function (done) {
try {
console.log('Begin: Product Search Check');
browser
.url('http://jd.com')
.setValue('#key', '诺基亚（NOKIA） Lumia 1520 3G手机（黄色） WCDMA/GSM')
.pause(5000)
.click('input[class="button"]')
.pause(3000)
.getText('.J_1006105', function(err, text){
if(err) throw err;
console.log('得到结果' +text);
assert(text.indexOf('2899.00') > -1)
done();
})
;
}
catch (e) {
console.log(e);
}
});
after(function (done) {
done();
});
});