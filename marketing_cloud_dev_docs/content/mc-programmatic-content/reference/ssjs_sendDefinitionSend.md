---
data: <%= reference.ssjs_coreSendFunctions.functions.DefinitionSend %>
---

##Examples

This sample code initializes a send definition with an external key of myESD and performs a send:
```
var esd = Send.Definition.Init('myESD');
var status = esd.Send();
```
