---
data: <%= reference.ssjs_coreAccountUser.functions.Retrieve %>
---

##Example
This sample code retrieves an account user based on the specified filter criteria:

```
var accountUser = AccountUser.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"MyAccount"});
```
