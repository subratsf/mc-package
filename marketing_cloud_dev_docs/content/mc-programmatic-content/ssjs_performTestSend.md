---
title: Perform a Send Preview Test Send
---

```
var SendDefObj = Platform.Function.CreateObject('EmailSendDefinition');
Platform.Function.SetObjectProperty(SendDefObj,'CustomerKey','My Test Send');
Platform.Function.SetObjectProperty(SendDefObj,'TestEmailAddr','acruz@example.com');

var send = Platform.Function.InvokePerform(SendDefObj,'Test',status);
```
