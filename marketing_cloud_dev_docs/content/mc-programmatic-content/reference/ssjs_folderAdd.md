---
data: <%= reference.ssjs_coreFolder.functions.Add %>
---

##Example
This sample code adds a folder to your account:
```
var newFolder = {
    "Name" : "Test Add Folder",
    "CustomerKey" : "test_folder_key",
    "Description" : "Test added",
    "ContentType" : "email",
    "IsActive" : "true",
    "IsEditable" : "true",
    "AllowChildren" : "false",
    "ParentFolderID" : 123456
};
var status = Folder.Add(newFolder);
```
