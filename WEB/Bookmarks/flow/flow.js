let LoginPage = require('../../Login/page/page.js');
let Bookmarkpage = require('../page/page.js')
let data_login = require('../data/data.js')

let data = require('../data/data.js')


class Bookmarks {

    constructor() {
        this.BookmarkName = data.Name;
        this.BookmarkURL = data.URL;
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

    Add() {
        browser.pause(1000)
        Bookmarkpage.clickBookmarkBtn()
        browser.pause(100)
        Bookmarkpage.clickBookmarkAdd()
        browser.pause(500)
        return this;
    }

    verifyBookmark_Add_Cancel() {
        browser.pause(1000)
        let expectedIcon_Cancel = 'キャンセル'
        let actualIcon_Cancel = browser.getText('/html/body/div[13]/div[3]/div[1]/button')
        expect(actualIcon_Cancel).to.equal(expectedIcon_Cancel)
        console.log("Icon_Cancel =", actualIcon_Cancel )
        return this;
    }

    verifyBookmark_Add_OK() {
        browser.pause(1000)
        let expectedIcon_OK = 'OK'
        let actualIcon_OK = browser.getText('/html/body/div[13]/div[3]/div[2]/button')
        expect(actualIcon_OK).to.equal(expectedIcon_OK)
        console.log("Icon_OK =", actualIcon_OK )
        return this;
    }

}

module.exports = Bookmarks;