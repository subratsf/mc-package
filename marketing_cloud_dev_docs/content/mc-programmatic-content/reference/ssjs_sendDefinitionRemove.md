---
data: <%= reference.ssjs_coreSendFunctions.functions.DefinitionRemove %>
---

##Examples

This sample code removes a send definition with an external key of myESD:
```
var esd = Send.Definition.Init('myESD');
var status = esd.Remove();
```
