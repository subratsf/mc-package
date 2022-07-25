---
data: <%= reference.ssjs_coreList.functions.SubscribersTrackingRetrieve %>
---

##Example
This sample code returns an array of tracking data for any subscribers specified by the passed filter argument:
```
var myList = List.Init('MyList');
var results = myList.Subscribers.Tracking.Retrieve({Property:"SubscriberKey", SimpleOperator:"equals", Value:"MyKey"});
```
