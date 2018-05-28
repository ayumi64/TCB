var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

const username = '//*[@id="username-:0-text"]'
const password = '//*[@id="password-:1-text"]'
const login_btn = '//*[@id="login-form-outer"]/form/div[4]/div[2]/input'
const slash_btn = '/html/body/div[5]/div/div[1]/div/a[1]'
const kintone_btn = '/html/body/div[5]/div/div[1]/div/a[4]/img'
const kintone_portal = '//*[@id="contents-body-ocean"]/div/div[1]/div/h2/span'
const kintone_portal_Create0 = '.gaia-argoui-coveroptionmenubutton'
const kintone_portal_SpaceCreate_Class = '//div[@class="gaia-argoui-pulldown-item"][position()=1]'
const kintone_portal_SpaceCreate_Xpath = '//*[@id=":1f"]/div/span'
const kintone_portal_SpaceCreate_Element = '.gaia-argoui-pulldown-item-text'
const kintone_portal_GuestSpaceCreate_Xpath = '//*[@id=":u"]'
const kintone_portal_Create_pulldown = '.gaia-argoui-pulldown gaia-argoui-pulldown-vertical'
const kintone_SpaceCreate_Scratch = '.ocean-space-template-name'
const Space_save_Class = '.gaia-argoui-dialog-buttons-default'
const Space_save_Xpath = '/html/body/div[15]/div[4]/div[2]/button'
const Space_name_Class = '.input-text-cybozu'
const Space_name_Xpath = '//*[@id="name-:il-text"]'
const Space_privacy_Xpath = '/html/body/div[27]/div[3]/div/div[1]/div[2]/span[1]'
const Space_privacy_Class = '.ocean-space-spaceconfig-checkbox ocean-space-spaceconfig-private'
const Space_MultiThread = '/html/body/div[25]/div[3]/div/div[1]/div[2]/span[2]/label'
const Space_Exitable = '/html/body/div[25]/div[3]/div/div[1]/div[2]/span[3]/label'
const Space_covers = '/html/body/div[25]/div[3]/div/div[1]/div[4]/div/img[17]'
const selectorCreate = 'body > div.gaia-argoui-pulldown.gaia-argoui-pulldown-vertical'
const accopt = '.account-menu-name-cybozu'
const logout = '//*[@id="account-box-cybozu"]/ul[2]/li/a'


describe('Kintone Login Test', function () {
    it('Space Title Test', function () {

        browser.url("https://yhgao.cybozu-dev.com");
        browser.setValue(username, 'u1');
        browser.setValue(password, '1');
        browser.click(login_btn);
        browser.pause(500)
        browser.click('//a[@class="service-slash" and contains(@href,"k")]');
        browser.pause(1000)
        browser.click(kintone_portal_Create0)
        var text = browser.getText(kintone_portal_SpaceCreate_Element);
        console.log(text);
        browser.click(kintone_portal_SpaceCreate_Class);
        browser.pause(500)
        var text = browser.getText('.ocean-space-template-name');
        console.log(text);
        browser.click('/html/body/*/div[2]/div[1]/ul/li[1]/a/span[1]/span/span');   //  Xpath每次都会变化比如：/html/body/div[45]/div[2]/div[1]/ul/li[1]/a/span[1]/span/span，用通配符替代
        browser.pause(500)
        browser.setValue('//div//input[@class="input-text-cybozu" and contains(@id,"name-")]','SpaceA');    // $x ,$$  // Xpath的id每次都会变化，如： //*[@id="name-:bm-text"]
        browser.pause(500)
        browser.click('//div//span[@class="ocean-space-spaceconfig-checkbox ocean-space-spaceconfig-private"]//label');
        browser.click('//div//span[@class="ocean-space-spaceconfig-checkbox ocean-space-spaceconfig-multiple"]//label');
        browser.click('//div//span[@class="ocean-space-spaceconfig-checkbox ocean-space-spaceconfig-fixedmember"]//label');
        browser.click('//div//button[@class="gaia-argoui-dialog-buttons-default"]');
        browser.pause(500)
    });
});

