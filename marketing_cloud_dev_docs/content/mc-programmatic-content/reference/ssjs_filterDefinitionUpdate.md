---
data: <%= reference.ssjs_coreFilterDefinition.functions.Update %>
---

##Example
This sample code updates the name of the filter definition:

var fd = FilterDefinition.Init("myFilterDef");
var status = fd.Update({ "Name": "Updated Name" });
