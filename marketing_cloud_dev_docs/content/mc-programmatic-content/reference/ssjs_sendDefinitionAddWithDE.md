---
data: <%= reference.ssjs_coreSendFunctions.functions.DefinitionAddWithDE %>
---

##Examples

This sample code adds the send definition with the applicable sendable data extension:
```
var esdParams = {
    "CustomerKey" : "ssjs_de_esd_1c",
    "Name" : "SSJS DE Test ESD3",
    "EmailSubject" : "Third send By Test DE Send Definition"
};

// local values
var scKey = 'scKey';
var emailKey = 'test_email';
var deKey = 'deKey';
var pubListKey = 'myPubList';

var status = Send.Definition.AddWithDE(esdParams, scKey, emailKey, deKey, pubListKey);
```
