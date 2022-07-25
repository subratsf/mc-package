---
data: <%= reference.ssjs_coreFolder.functions.Retrieve %>
---

##Example
This sample code retrieves an array of folders based on the specified criteria:
```
var results = Folder.Retrieve({Property:"Name",SimpleOperator:"equals",Value:"my emails"});
```
