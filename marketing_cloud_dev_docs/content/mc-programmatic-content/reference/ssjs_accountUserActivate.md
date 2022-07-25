---
data: <%= reference.ssjs_coreAccountUser.functions.Activate %>
---

##Example
This sample code initializes a specific account and activates that account:

```
var acctUser = AccountUser.Init('myAccountUser', 123456789);
var status = acctUser.Activate();
```
