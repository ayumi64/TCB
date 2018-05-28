let LoginFlow = require('./Loin/flow/flow.js')
let TestData = require('../data/data').dataMap;


describe ('Kintone Login + Bug', function(){
 
    let testLogin = TestData.get('login').info;

    it ('Bug,12256') , function () {
        let Login = new LoginFlow(testLogin)
        Login
        .openBrowser()
        .login()
        
        let testFlow new testFlow(12256)
        
        

                
    }