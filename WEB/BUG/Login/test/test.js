let LoginFlow = require('../flow/flow');
let TestData = require('../data/data').dataMap;

describe ('Kintone Login Test', function(){

    let testLogin = TestData.get('login').info;

 it('Title Test',function (){
 
     let testFlow = new LoginFlow(testLogin)

     testFlow
      .openBrowser()
      .login()
      .verifyLogin()
 }
)
});