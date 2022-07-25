---
data: <%= reference.ssjs_coreQueryDefinition.functions.Add %>
---

##Examples

This sample code adds a query definition to your account:
```
var queryDef = {
    Name : "Example Query Definition",
    CustomerKey : "myQueryDef",
    TargetUpdateType : "Overwrite",
    TargetType : "DE",
    Target : {
        Name : "Example Target DE",
        CustomerKey : "example_target_de"
    },
    QueryText : "SELECT SubKey, Email, Name FROM [Example Target DE] where FavoriteItemID=77"
};

var status = QueryDefinition.Add(queryDef);
```
This sample code adds a query definition and places it inside a specific folder:
```
var queryDef = {
    Name : "Example Query Definition",
    CustomerKey : "myQueryDef",
    CategoryID : 123456,
    TargetUpdateType : "Overwrite",
    TargetType : "DE",
    Target : {
        Name : "Example Target DE",
        CustomerKey : "example_target_de"
    },
    QueryText : "SELECT SubKey, Email, Name FROM [Example Target DE] where FavoriteItemID=77"
};

var status = QueryDefinition.Add(queryDef);
```
