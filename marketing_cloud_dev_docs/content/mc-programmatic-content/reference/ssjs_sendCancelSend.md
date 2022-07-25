---
data: <%= reference.ssjs_coreSendFunctions.functions.CancelSend %>
---

##Examples

This sample code demonstrates how to perform this against an initialized send:
```
var mySend = Send.Init(12345);
var status = mySend.CancelSend();
```
