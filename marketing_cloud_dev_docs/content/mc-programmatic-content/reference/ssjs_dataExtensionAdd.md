---
data: <%= reference.ssjs_coreDataExtension.functions.Add %>
---

Limit your data extension external keys to 36 characters to help ensure all further processes function correctly.

##Examples
This sample code creates a data extension:
```
var deObj = {
        "CustomerKey" : "demoDE",
        "Name" : "My Demo DE",
        "Fields" : [
          { "Name" : "Field 1", "FieldType" : "Number", "IsPrimaryKey" : true, "IsRequired" : true },
          { "Name" : "Field 2", "FieldType" : "Text", "MaxLength" : 50 },
          { "Name" : "Field 3", "FieldType" : "Date", "Ordinal" : 2 },
        ]
    };

var myDE = DataExtension.Add(deObj);
```
This sample code creates a sendable data extension:
```
var deObj = {
    CustomerKey : "SendableDE",
    Name : "Sendable Data Extension",       
    Fields : [
        { "Name" : "SubKey", "FieldType" : "Text", "IsPrimaryKey" : true, "MaxLength" : 50, "IsRequired" : true },
        { "Name" : "SecondField", "FieldType" : "Text", "MaxLength" : 50 },
        { "Name" : "ThirdField", "FieldType" : "Text", "MaxLength" : 50 },
        { "Name" : "DifferentSubKey", "FieldType" : "Text", "MaxLength" : 50 }
    ],
    SendableInfo : {
        Field : { "Name" : "SubKey", "FieldType" : "Text" },
        RelatesOn : "Subscriber Key"
    }
};

var de = DataExtension.Add(deObj);
```
This sample code creates a sendable and testable data extension:
```
var deObj = {
     "CustomerKey" : "0demoDE5",
     "Name" : "0My Demo DE5",
     SendableInfo : {
          Field : { "Name" : "Field 2", "FieldType" : "Text" },
          RelatesOn : "Subscriber Key"
     },
     "IsTestable": true,
     "Fields" : [
          { "Name" : "Field 1", "FieldType" : "Number", "IsPrimaryKey" : true, "IsRequired" : true },
          { "Name" : "Field 2", "FieldType" : "Text", "MaxLength" : 50 },
          { "Name" : "Field 3", "FieldType" : "Date", "Ordinal" : 2 },
     ]
};

var myDE = DataExtension.Add(deObj);
```
