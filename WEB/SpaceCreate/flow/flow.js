let LoginPage = require('../../Login/page/page.js');
let SpaceCreatePage = require('../page/page.js')
let data_login = require('../data/data.js')

let data = require('../data/data.js')


class SpaceCreate {

    constructor(data) {
        this.SpaceName = data.SpaceName;
        this.POSITION = data.POSITION;
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

    Create() {
        browser.pause(1000)
        SpaceCreatePage.clickCreateBtn()
        browser.pause(500)
        SpaceCreatePage.clickSpaceCreateBtn()
        browser.pause(500)
        SpaceCreatePage.clickScratchBtn()
        browser.pause(500)
        SpaceCreatePage.inputSpaceName(this.SpaceName)
            .inputProperty_private()
            .inputProperty_multiple()
            .inputProperty_fixedmember()
            .clickSpaceSave()
        browser.pause(1000)
        return this;
    }

    verifyTittle() {
        browser.pause(1000)
        let expectedTittle = 'Space_Multi'
        let actualTittle = browser.getText('.gaia-argoui-space-spacelayout-title')
        expect(actualTittle).to.equal(expectedTittle)
        console.log("Tittle =", actualTittle )
    }

}

module.exports = SpaceCreate;