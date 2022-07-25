---
data: <%= reference.ssjs_coreAccountUser.functions.Update %>
---

##Example
This sample code changes the password of the account user specified by the external key.

```
var acctUser = AccountUser.Init('myAccountUser', 123456789);
var status = acctUser.Update({ "Password" : "XXXXX" });
```
