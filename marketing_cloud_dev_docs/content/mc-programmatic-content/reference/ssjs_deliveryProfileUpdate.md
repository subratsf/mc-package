---
data: <%= reference.ssjs_coreDeliveryProfile.functions.Update %>
---

##Examples
This sample code updates the Name attribute of the delivery profile to the specified value:
```
var myProfile = DeliveryProfile.Init('myDeliveryProfile');
var status = myProfile.Update({ "Name" : "SSJS Updated Delivery Profile" });
```
