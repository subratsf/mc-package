---
data: <%= reference.ssjs_coreSendFunctions.functions.DefinitionAdd %>
---

##Examples

This sample code adds the send definition.
```
var esdParams = {
    "CustomerKey" : "example_esd",
    "Name" : "Example Send Definition",
    "EmailSubject" : "Sent By Example Send Definition"
};
Send.Definition.Add(esdParams, 'example_sc_key', 'example_email_key', [ 12345, 12346 ]);
```
