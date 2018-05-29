const kintone_portal = '//*[@id="contents-body-ocean"]/div/div[1]/div/h2/span'
const kintone_portal_Create0 = '.gaia-argoui-coveroptionmenubutton'
const kintone_portal_Create_pulldown_NewSpace = '//div[@class="gaia-argoui-pulldown-item"][position()=1]'
const kintone_SpaceCreate_Scratch = '/html/body/*/div[2]/div[1]/ul/li[1]/a/span[1]/span/span'

const Space_name = '//div//input[@class="input-text-cybozu" and contains(@id,"name-")]'
const Space_private = '//div//span[@class="ocean-space-spaceconfig-checkbox ocean-space-spaceconfig-private"]//label'
const Space_multiple = '//div//span[@class="ocean-space-spaceconfig-checkbox ocean-space-spaceconfig-multiple"]//label'
const Space_fixedmember = '//div//span[@class="ocean-space-spaceconfig-checkbox ocean-space-spaceconfig-fixedmember"]//label'
const Space_save = '//div//button[@class="gaia-argoui-dialog-buttons-default"]'

class SpaceCreate {

    clickCreateBtn() {
        $(kintone_portal_Create0).click();
        return this;
    }

    clickSpaceCreateBtn() {
        $(kintone_portal_Create_pulldown_NewSpace).click();
        return this;
    }

    clickScratchBtn() {
        $(kintone_SpaceCreate_Scratch).click();
        return this;
    }

    inputSpaceName(SpaceName) {
        $(Space_name).setValue(SpaceName);
        return this;
    }

    inputProperty_private() {
        $(Space_private).click();
        return this;
    }

    inputProperty_multiple() {
        $(Space_multiple).click();
        return this;
    }

    inputProperty_fixedmember() {
        $(Space_fixedmember).click();
        return this;
    }

    clickSpaceSave() {
        $(Space_save).click();
        return this;
    }

}

module.exports = new SpaceCreate();