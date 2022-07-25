---
data: <%= reference.ssjs_coreTriggeredSend.functions.Add %>
---

##Example
This sample code adds a triggered send  to your account:
```
var newTSD = {
   "Name" : "Test TSD",
   "CustomerKey" : "ssjs_tsd_key",
   "FromName" : "Test From Name",
   "FromAddress" : "me@example.com",
   "EmailID" : 12345,
   "SendClassificationID" : 54321
};
var tsd = TriggeredSend.Add(newTSD);
```
