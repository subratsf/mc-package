---
data: <%= reference.ssjs_coreSendFunctions.functions.TrackingTotalByIntervalRetrieve %>
---

##Example

This sample code returns a month's worth of click data for the initialized send aggregated by day:
```
var singleSend = Send.Init(12345);
var results = singleSend.Tracking.TotalByInterval.Retrieve('Click', '07-01-2010', '07-31-2010', 'day');
```
