---
data: <%= reference.ssjs_coreEmail.functions.Retrieve %>
---

##Example
This sample code updates the Name and Subject attributes of the email to the specified value:
```
var myEmail = Email.Init("myEmail");
var status = myEmail.Update({ "Name": "Updated Name", "Subject" : "Updated Email Subject" });
```
