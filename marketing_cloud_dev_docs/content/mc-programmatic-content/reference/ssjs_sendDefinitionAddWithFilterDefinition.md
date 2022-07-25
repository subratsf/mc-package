---
data: <%= reference.ssjs_coreSendFunctions.functions.DefinitionAddWithFilterDefinition %>
---

##Examples

This sample code adds the send definition with the appropriate filter definition:
```
var esdParams = {
    "CustomerKey" : "filterDef_esd",
    "Name" : "Example Filtered Send Definition",
    "EmailSubject" : "Sent By Filtered Send Definition"
};

var scKey = 'scKey';
var emailKey = 'test_email';
var filterDefKey = 'fdKey';
var listID = 144;

var status = Send.Definition.AddWithFilterDefinition(esdParams, scKey, emailKey, filterDefKey, listID);
```
