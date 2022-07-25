---
data: <%= reference.ssjs_coreDeliveryProfile.functions.Add %>
---

##Example
This sample code adds a delivery profile to your account:

```
var newDP = {
    "Name" : "SSJS Added Delivery Profile",
    "CustomerKey" : "test_delivery_profile",
    "Description" : "An SSJS Added Profile",
    "SourceAddressType" : "DefaultPrivateIPAddress"
};
var newProfile = DeliveryProfile.Add(newDP);
```
