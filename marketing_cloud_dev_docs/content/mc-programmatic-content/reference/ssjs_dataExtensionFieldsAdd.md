---
data: <%= reference.ssjs_coreDataExtension.functions.FieldsAdd %>
---

##Example
This sample code demonstrates how to add a new field to an existing data extension:

```
var de = DataExtension.Init('SSJSTest');

var newField = {
  Name : "NewFieldV2",
  CustomerKey : "CustomerKey",
  FieldType : "Number",
  IsRequired: true,
  DefaultValue: "100"
};
var status = de.Fields.Add(newField);
```
