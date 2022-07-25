---
data: <%= reference.ssjs_coreQueryDefinition.functions.Perform %>
---

##Example

This sample code performs the query definition with the external key "myQueryDef":
```
var qd = QueryDefinition.Init("myQueryDef");
var status = qd.Perform();
```
