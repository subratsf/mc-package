---
data: <%= reference.ssjs_coreEvents.functions.Retrieve %>
---

The information can include these events:

* Click
* ForwardedEmail
* ForwardedEmailOptIn
* HardBounce
* NotSent
* Open
* OtherBounce
* Sent
* SoftBounce
* Survey
* Unsubscribe

##Example
The sample code retrieves the bounce events for a given send based on the criteria provided:
```
var sendID = 12345;
var filter = { Property:"SendID", SimpleOperator:"equals", Value:sendID };
var bounces = BounceEvent.Retrieve(filter);
```
