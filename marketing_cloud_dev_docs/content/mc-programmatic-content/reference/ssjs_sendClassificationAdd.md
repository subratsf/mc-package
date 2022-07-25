---
data: <%= reference.ssjs_coreSendClassification.functions.Add %>
---

##Example

This sample code adds a send classification to your account:
```
var newSC = {
    CustomerKey : "mySCKey",
    Name : "SSJS Test SC",
    Description : "Test SSJS description",
    SenderProfileKey : "mySPKey",
    DeliveryProfileKey : "myDPKey"
};

SendClassification.Add(newSC);
```
