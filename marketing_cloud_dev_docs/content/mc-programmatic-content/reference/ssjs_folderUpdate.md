---
data: <%= reference.ssjs_coreFolder.functions.Update %>
---

##Example
This sample code updates the Name attribute of the folder to the specified value:
```
var myFolder = Folder.Init("myFolder");
var status = myFolder.Update({ "Name" : "Updated Folder Name" });
```
