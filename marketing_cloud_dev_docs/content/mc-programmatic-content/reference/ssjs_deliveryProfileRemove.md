---
data: <%= reference.ssjs_coreDeliveryProfile.functions.Remove %>
---

##Examples
This sample code deletes the delivery profile with External Key myDeliveryProfile:
```
var myProfile = DeliveryProfile.Init('myDeliveryProfile');
var status = myProfile.Remove();
```
