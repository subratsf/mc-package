---
data: <%= reference.ssjs_coreTriggeredSend.functions.TrackingClicksRetrieve %>
---

##Example
```
var tsd = TriggeredSend.Init("MyTSDKey");
var results = tsd.Tracking.Clicks.Retrieve({Property:"SendUrlID",SimpleOperator:"equals",Value:12345});
```
