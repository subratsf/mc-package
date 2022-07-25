---
data: <%= reference.ssjs_coreSendFunctions.functions.RetrieveLists %>
---

##Example

This sample code demonstrates how to retrieve this information for an individual send event using the SendID:
```
var filter = { Property : "SendID", SimpleOperator : "equals", Value : 12345 };
var listsSentTo = Send.RetrieveLists(filter);
```
