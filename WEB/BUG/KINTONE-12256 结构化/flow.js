let LoginPage = require('../page/page.js');

class Login {

    constructor(data) {
        this.userName = data.user;
        this.password = data.password;

    }

    openBrowser() {
        browser.url("https://yhgao.cybozu-dev.com");
        return this;
    }

    login() {
        LoginPage.inputAcc(this.userName)
            .inputPass(this.password)
            .clickLoginBtn()
        browser.pause(3000)
        LoginPage.clickkintoneBtn()
        return this;
    }

    verifyLogin() {
        let expectedTitle = "トップ";
        let actualTitle = browser.getTitle();
        expect(actualTitle).to.equal(expectedTitle)
    }

    verifyLogin2() {
        let expectedPortal = "Portal";
        let actualPortal = browser.getText('//*[@id="contents-body-ocean"]/div/div[1]/div/h2/span');
        expect(actualTitle).to.equal(expectedPortal)
    }
}

module.exports = Login;