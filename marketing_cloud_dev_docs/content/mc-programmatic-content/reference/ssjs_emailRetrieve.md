---
data: <%= reference.ssjs_coreEmail.functions.Retrieve %>
---

##Example
This sample code retrieves an array of emails based on the specified criteria:
```
var results = Email.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"myEmail"});
```
