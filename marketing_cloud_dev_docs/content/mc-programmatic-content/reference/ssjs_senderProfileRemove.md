---
data: <%= reference.ssjs_coreSenderProfile.functions.Remove %>
---

##Example
This sample code deletes the sender profile with the external key mySenderProfile:
```
var myProfile = SenderProfile.Init('mySenderProfile');
var status = myProfile.Remove();
```
