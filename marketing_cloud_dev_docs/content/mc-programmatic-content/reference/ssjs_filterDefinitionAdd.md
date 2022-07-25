---
data: <%= reference.ssjs_coreFilterDefinition.functions.Add %>
---

##Example
This sample code adds a filter definition to your account:
```
var filterObj = { Property : "LuckyNumber", SimpleOperator : "equals", Value : 77 };

var newFD = {
    Name : "SSJS Filter Definition"
    CustomerKey : "myFilterDef",
    Filter : filterObj,
    DataSource : {
        Type : "SubscriberList",
        CustomerKey : "example_list_key"
    }
};

var status = FilterDefinition.Add(newFD);
```
