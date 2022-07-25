---
data: <%= reference.ssjs_coreDataExtension.functions.FieldsUpdateSendableField %>
---

##Example
This sample code updates the subscriber key value in a field to a new value:

```
var updateDE = DataExtension.Init('sendableDataExtension');
var status = updateDE.Fields.UpdateSendableField("DifferentSubKey", "Subscriber Key");
```
