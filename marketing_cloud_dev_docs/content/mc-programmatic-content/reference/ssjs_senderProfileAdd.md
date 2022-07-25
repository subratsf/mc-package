---
data: <%= reference.ssjs_coreSenderProfile.functions.Add %>
---

##Example
This sample code adds a sender profile to your account:
```
var newSP = {
    "Name" : "SSJS Added Send Profile",
    "CustomerKey" : "test_send_profile",
    "Description" : "An SSJS Added Profile",
    "FromName" : "Andrea Cruz",
    "FromAddress" : "acruz@example.com"
};
var newSenderProfile = SenderProfile.Add(newSP);
```
