---
data: <%= reference.ssjs_coreQueryDefinition.functions.Update %>
---

##Example

This sample code updates the name and query of the query definition:
```
var qd = QueryDefinition.Init("myQueryDef");

var status = qd.Update({
    Name : "Updated Query Definition Name",
    QueryText : "SELECT SubKey, Email, Name FROM [Example Target DE] where FavoriteItemID=12"
});
```
