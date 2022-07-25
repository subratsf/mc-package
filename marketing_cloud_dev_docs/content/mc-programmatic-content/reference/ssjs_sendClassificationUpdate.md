---
data: <%= reference.ssjs_coreSendClassification.functions.Update %>
---

##Example

This sample code updates the name attribute for the send classification with the external key mySendClassification:
```
var sc = SendClassification.Init('mySendClassification');

var updatedSC = {
    Name : "Updated Send Classification",
    SenderProfileKey : "mySPKey",
    DeliveryProfileKey : "myDPKey"
};

var status = sc.Update(updatedSC);
```
