---
data: <%= reference.ssjs_coreTriggeredSend.functions.Publish %>
---

##Example
This sample code initializes a triggered send object and causes it to publish any changes, refreshing the active content:
```
var tsd = TriggeredSend.Init("triggeredSend");
var status = tsd.Publish();
```
