---
data: <%= reference.ssjs_coreQueryDefinition.functions.Remove %>
---

##Example

This sample code deletes the query definition with the external key "myQueryDef":
```
var qd = QueryDefinition.Init("myQueryDef");
var status = qd.Remove();
```
