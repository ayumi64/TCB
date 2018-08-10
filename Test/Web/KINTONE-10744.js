let LoginFlow = require('../../WEB/Login/flow/flow.js');
let TestData_Login = require('../../WEB/Login/data/data.js').dataMap;
let TestData_Bookmark = require('../../WEB/Bookmarks/data/data.js').dataMap;
let Bookmarks = require('../../WEB/Bookmarks/flow/flow.js');
var assert = require('assert');


describe('Bug再现确认', function () {

    let testLogin = TestData_Login.get('login').info;

    it('KINTONE-10744', function () {
        let testFlow = new LoginFlow(testLogin)
        testFlow
            .openBrowser()
            .login()
        browser.pause(1000);

        let testBookmarkAdd = new Bookmarks();
        testBookmarkAdd
            .Add()
            .verifyBookmark_Add_Cancel()
            .verifyBookmark_Add_OK()
        browser.pause(1000)
  
        console.log("再現しました：:アイコンがOKと表示される")

    })
});

//command java -jar selenium-server , wdio wdio.conf.js