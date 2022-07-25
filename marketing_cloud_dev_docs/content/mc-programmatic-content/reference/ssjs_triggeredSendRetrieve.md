---
data: <%= reference.ssjs_coreTriggeredSend.functions.Retrieve %>
---

##Example
This sample code retrieves a triggered send based on the specified filter criteria:
```
var results = TriggeredSend.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"ssjs_tsd_key"});
```
