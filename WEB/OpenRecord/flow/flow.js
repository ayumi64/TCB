let LoginPage = require('../../Login/page/page.js');
let SpaceCreatePage = require('../page/page.js')
let data_record = require('../data/data.js')

let data = require('../data/data.js')


class OpenRecord {

    constructor(data) {
        this.app = data.app;
        this.id = data.id;
    }

    openBrowser() {
        browser.url("https://yhgao.cybozu-dev.com");
        return this;
    }

    login() {
        LoginPage.inputAcc(this.userName)
            .inputPass(this.password)
            .clickLoginBtn()
        browser.pause(1000)
        LoginPage.clickkintoneBtn()
        browser.pause(1000)
        return this;
    }

    OpenRecord() {
        browser.url("https://yhgao.cybozu-dev.com/k/"+this.App+'/'+this.id);
        browser.pause(1000)
        return this;
    }

    verifyTittle() {
        browser.pause(1000)
        let expectedValue = 'Space_Multi'
        let actualValue = browser.getText('.gaia-argoui-space-spacelayout-title')
        expect(actualValue).to.equal(expectedValue)
        console.log("Value =", actualValue )
    }

}

module.exports = OpenRecord;