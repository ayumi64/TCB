const username =  '//*[@id="username-:0-text"]'
const password = '//*[@id="password-:1-text"]'
const login_btn = '//*[@id="login-form-outer"]/form/div[4]/div[2]/input'
const kintone_btn = '/html/body/div[5]/div/div[1]/div/a[4]/img'
const kintone_portal = '//*[@id="contents-body-ocean"]/div/div[1]/div/h2/span'
const noti_portal = '//*[@id="contents-body-ocean"]/div/div[2]/div[1]/div[1]/div/div/div[1]'
const noti_space = '//*[@id="contents-body-ocean"]/div/div[5]/div/div[1]/div/div[1]'

class Login {

 inputAcc(userName){
     $(username).setValue(userName);
     return this;
 }

 inputPass(passWord){
    $(password).setValue(passWord);
    return this;
 }

clickLoginBtn(){
    $(login_btn).click();
    return this;
}

clickkintoneBtn(){
    $(kintone_btn).click();
    return this;
}
}

module.exports = new Login();