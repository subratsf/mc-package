---
data: <%= reference.ssjs_coreEmail.functions.CheckContent %>
---

##Example
This sample code calls CheckContent() on the initialized email object and writes out the results from the returned JSON object:
```
var myEmail = Email.Init("myEmail");
var results = myEmail.CheckContent();
Write(results.Task.CheckPassed);
Write(results.Task.ResultMessage);
```
