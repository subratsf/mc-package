---
data: <%= reference.ssjs_coreAccount.functions.trackingRetrieve %>
---

##Example
This sample code retrieves an array of tracking data for the accounts based on the specified filter criteria:
```
var acctTracking = Account.Tracking.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"MyAccount"});
```
