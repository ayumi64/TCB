const username =  '//*[@id="username-:0-text"]'
const password = '//*[@id="password-:1-text"]'

const Portal_Noti = '//*[@id="contents-body-ocean"]/div/div[2]/div[1]/div[1]/div/div/div[1]'
const Space_Noti = '//*[@id="contents-body-ocean"]/div/div[5]/div/div[1]/div/div[1]'


class Noti {

getAttribute(Portal){
    $(Portal_Noti).getAttribute(Portal);
    return this;
}


getAttribute(Space){
    $(Space_Noti).getAttribute(Space);
    return this;
}

}

module.exports = new Noti();