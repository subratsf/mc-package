---
data: <%= reference.ssjs_coreQueryDefinition.functions.Retrieve %>
---

##Example

This sample code retrieves an array of query definitions based on the specified criteria:
```
var results = QueryDefinition.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"myQueryDef"});
```
