---
data: <%= reference.ssjs_coreSendFunctions.functions.DefinitionRetrieve %>
---

##Examples

This sample code retrieves an array of send definitions based on the specified criteria:
```
var esd = Send.Definition.Retrieve({Property:"CustomerKey", SimpleOperator:"equals", Value:"ssjs_test_esd"});
```
