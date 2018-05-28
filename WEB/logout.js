const username = '//*[@id="username-:0-text"]'
const password = '//*[@id="password-:1-text"]'
const login_btn = '//*[@id="login-form-outer"]/form/div[4]/div[2]/input'
const kintone_btn = '/html/body/div[5]/div/div[1]/div/a[1]'
const kintone_portal = '//*[@id="contents-body-ocean"]/div/div[1]/div/h2/span'
const kintone_portal_Create0 = '<div class="gaia-argoui-coveroptionmenubutton" title="オプション" role="button" aria-expanded="false" tabindex="0" aria-haspopup="true" style="user-select: none;"></div>'
const kintone_portal_SpaceCreate = '//*[@id=":t"]/div/span'
const kintone_SpaceCreate_Scratch = '/html/body/div[35]/div[2]/div[1]/ul/li[1]/a/span[1]/span/span'
const Space_save = '/html/body/div[25]/div[4]/div[2]/button'
const Space_name = '//*[@id="name-:81-text"]'
const Space_privacy = '/html/body/div[25]/div[3]/div/div[1]/div[2]/span[1]/label'
const Space_MultiThread = '/html/body/div[25]/div[3]/div/div[1]/div[2]/span[2]/label'
const Space_Exitable = '/html/body/div[25]/div[3]/div/div[1]/div[2]/span[3]/label'
const Space_covers = '/html/body/div[25]/div[3]/div/div[1]/div[4]/div/img[17]'
const selectorCreate = 'body > div.gaia-argoui-pulldown.gaia-argoui-pulldown-vertical'
const accopt = '.account-menu-name-cybozu'
const logout = '//*[@id="account-box-cybozu"]/ul[2]/li/a'


describe('Kintone Login Test', function () {


    it('Space Title Test', function () {

        browser.url("https://yhgao.cybozu-dev.com");
        browser.setValue(username, 'cybozu');
        browser.setValue(password, 'cybozu');
        browser.click(login_btn);
        browser.pause(1000)
        browser.click(kintone_btn);
        browser.pause(1000)
        browser.click(accopt)
        browser.pause(1000)
        browser.click(logout)
        browser.pause(1000)
    });
});
