---
data: <%= reference.ssjs_coreSendFunctions.functions.TrackingRetrieve %>
---

##Example

This sample code retrieves an array of tracking data for the send(s) based on the specified filter criteria:
```
var sendTracking = Send.Tracking.Retrieve({Property:"SendID",SimpleOperator:"equals",Value:12345});
```
