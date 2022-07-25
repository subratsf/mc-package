---
data: <%= reference.ssjs_coreSendClassification.functions.Retrieve %>
---

##Example

This sample code retrieves an array of available send classifications based on the specified criteria:
```
var results = SendClassification.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"mySendClassification"});
```
