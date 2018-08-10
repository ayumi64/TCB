let data = [
{"id":"Bookmarks",
"description":"Bookmarks",
 "info":{
     "Name":'cybozu',
     "URL":''
 }
}
]

let dataMap = new Map(data.map((i) => [i.id, i]));
exports.dataMap = dataMap;