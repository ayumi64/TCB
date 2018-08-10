let data = [
    {"id":"login",
    "description":"kintone login",
     "info":{
         "user":"cybozu",
         "password":"cybozu"
     }
    }
    ]
    
    let dataMap = new Map(data.map((i) => [i.id, i]));
    exports.dataMap = dataMap;