---
data: <%= reference.ssjs_coreEmail.functions.Validate %>
---

##Example
This sample code calls Validate() on the initialized email object and writes out the results from the returned JSON object:
```
var myEmail = Email.Init("myEmail");
var results = myEmail.Validate();
Write(results.Task.ValidationStatus);
Write(results.Task.ValidationMessages);
```
