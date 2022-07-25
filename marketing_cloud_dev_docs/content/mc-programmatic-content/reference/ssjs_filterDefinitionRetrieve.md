---
data: <%= reference.ssjs_coreFilterDefinition.functions.Retrieve %>
---

##Example
This sample code retrieves an array of filter definitions based on the specified criteria:
```
var results = FilterDefinition.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"myFilterDef"});
```
