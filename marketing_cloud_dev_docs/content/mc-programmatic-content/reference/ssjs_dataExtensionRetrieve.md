---
data: <%= reference.ssjs_coreDataExtension.functions.Retrieve %>
---

Limit your data extension external keys to 36 characters to help ensure all further processes function correctly.

##Examples
This sample code retrieves data extensions based on the specified filter criteria:

```
var results = DataExtension.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"myDEKey"});
```
