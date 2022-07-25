---
data: <%= reference.ssjs_coreTriggeredSend.functions.TrackingRetrieve %>
---

##Example
This sample code retrieves an array of tracking data for the triggered send based on the specified filter criteria:
```
var tsd = TriggeredSend.Init("MyTSDKey");
var tsdTracking = tsd.Tracking.Retrieve();
```
