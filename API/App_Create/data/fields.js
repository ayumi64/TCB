let appid = require ('../App_Create.js')

var fields = 

{
            "app": appid,

            "properties": {
                "文字列__1行_": {
                    "code": "文字列__1行_",
                    "defaultValue": "",
                    "expression": "",
                    "hideExpression": false,
                    "maxLength": 0,
                    "minLength": 0,
                    "label": "文字列 (1行)",
                    "noLabel": false,
                    "required": false,
                    "type": "SINGLE_LINE_TEXT",
                    "unique": true
                },
                "数値": {
                    "code": "数値",
                    "defaultValue": "12345",
                    "digit": true,
                    "displayScale": "",
                    "expression": "",
                    "maxValue": 0,
                    "minValue": 0,
                    "label": "数値",
                    "noLabel": true,
                    "required": false,
                    "type": "NUMBER",
                    "unique": false,
                    "unit": "$",
                    "unitPosition": "BEFORE"
                }
        
            }
}

module.export = fields