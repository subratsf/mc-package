---
data: <%= reference.ssjs_coreSendClassification.functions.Remove %>
---

##Example

This sample code deletes the send classification with the external key mySendClassification:
```
var sc = SendClassification.Init('mySendClassification');
var status = sc.Remove();
```
