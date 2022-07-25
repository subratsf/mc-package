---
data: <%= reference.ssjs_coreDataExtension.functions.FieldsRetrieve %>
---

##Example
This code initializes a data extension and retrieves information on the fields.
```
var birthdayDE = DataExtension.Init("birthdayDE");
var fields = birthdayDE.Fields.Retrieve();
```

```
[
    {
        "Name":"FirstName",
        "FieldType":"",
        "IsPrimaryKey":false,
        "MaxLength":50,
        "Ordinal":0
        "DefaultValue":""
    },  {
        "Name":"LastName",
        "FieldType":"",
        "IsPrimaryKey":false,
        "MaxLength":50,
        "Ordinal":1
        "DefaultValue":""
    },  {
        "Name":"EmailAddress",
        "FieldType":"",
        "IsPrimaryKey":true,
        "MaxLength":100,
        "Ordinal":3,
        "DefaultValue":""
    },  {
        "Name":"Birthday",
        "FieldType":"",
        "IsPrimaryKey":false,
        "MaxLength":10,
        "Ordinal":4,
        "DefaultValue":""
    },    {
        "Name":"Age",
        "FieldType":"",
        "IsPrimaryKey":false,
        "MaxLength":3,
        "Ordinal":5,
        "DefaultValue":""
    }
]
```
