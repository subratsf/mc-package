---
data: <%= reference.ssjs_coreSendFunctions.functions.TrackingClickRetrieve %>
---

##Example

This sample code returns click tracking information for the send with the send ID of 12345.
```
var singleSend = Send.Init(12345);
var results = singleSend.Tracking.Clicks.Retrieve({Property:"ID",SimpleOperator:"equals",Value:12345});
```
