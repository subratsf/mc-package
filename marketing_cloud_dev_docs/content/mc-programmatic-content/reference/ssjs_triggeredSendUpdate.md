---
data: <%= reference.ssjs_coreTriggeredSend.functions.Update %>
---

##Example
This sample code initializes a triggered send definition and updates the name:
```
var tsd = TriggeredSend.Init("triggeredSend");
var status = tsd.Update({ "Name" : "Updated TSD Name" });
```
