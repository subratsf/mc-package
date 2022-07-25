---
data: <%= reference.ssjs_coreSubscriber.functions.Retrieve %>
---

##Example
This sample code retrieves an array of subscribers based on the specified criteria:
```
var results = Subscriber.Retrieve({Property:"SubscriberKey",SimpleOperator:"equals",Value:"MySubscriberKey"});
```
