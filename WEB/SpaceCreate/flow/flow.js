let LoginPage = require('../../Login/page/page.js');
let SpaceCreatePage = require('../page/page.js')
let data_login = require('../data/data.js')

let data = require('../data/data.js')


class SpaceCreate {

    constructor(data) {
        this.SpaceName = data.SpaceName;
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
            .clickScratchBtn()
            .inputSpaceName(this.SpaceName)
            .inputProperty_private()
            .inputProperty_multiple()
            .inputProperty_fixedmember()
            .clickSpaceSave()
        return this;
    }

}

module.exports = SpaceCreate;