---
data: <%= reference.ssjs_coreTriggeredSend.functions.TrackingTotalByIntervalRetrieve %>
---

##Example
This sample code returns a month's worth of click data for the initialized triggered send aggregated by day:
```
var tsd = TriggeredSend.Init("MyTSDKey");
var results = tsd.Tracking.TotalByInterval.Retrieve('Click', '07-01-2010', '07-31-2010', 'day');
```
