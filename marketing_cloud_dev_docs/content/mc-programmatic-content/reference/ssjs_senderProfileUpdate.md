---
data: <%= reference.ssjs_coreSenderProfile.functions.Update %>
---

##Example
This sample code updates the Name attribute of the sender profile to the specified value:
```
var myProfile = SenderProfile.Init('mySenderProfile');
var status = myProfile.Update({ "Name" : "SSJS Updated Sender Profile" });
```
