---
data: <%= reference.ssjs_coreContentArea.functions.Update %>
---

##Example
This sample code updates the Name attribute of the content area to the specified value:

```
var obj = ContentAreaObj.Init('testca');
var status = obj.Update({"Name" : "Name Updated By SSJS" });
```
