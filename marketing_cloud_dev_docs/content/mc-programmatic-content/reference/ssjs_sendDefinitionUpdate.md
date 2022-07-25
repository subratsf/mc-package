---
data: <%= reference.ssjs_coreSendFunctions.functions.DefinitionUpdate %>
---

##Examples

This sample code initializes a send definition with an external key of myESD and updates the name:
```
var esd = Send.Definition.Init('myESD');
var status = esd.Update({ "Name" : "Updated ESD Name" });
```
This sample code updates an email send definition with a new sendable data extension:
```
var newDE = {
    DataExtensionKey : "DE"
    PubListKey : "MyPubListKey"
}

var deESD = Send.Definition.Init('ESD');
var status = deESD.Update(newDE);

This sample code demonstrates how to update a filter definition used by a send definition:

var esd = Send.Definition.Init('myESD');
var esdUpdates = {
    Name : "Updated ESD Name",
    FilterDefinition : {
        CustomerKey : "myFilterDefKey",
        ListID : 12345
    }
};

var status = esd.Update(esdUpdates);
```
