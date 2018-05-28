let data = [
{"id":"SpaceCreateMulti",
"description":"创建复数Space",
 "info":{
     "userName":'cybozu',
     "passWord":"cybozu",
     "SpaceName":"Space_Multi",
     "users":"cybozu",
     'private':'true',
     "MultiThread":'true',
     'Exit':'true'
 }
}
]

let dataMap = new Map(data.map((i) => [i.id, i]));
exports.dataMap = dataMap;