---
data: <%= reference.ssjs_coreAccountUser.functions.Deactivate %>
---

##Example
This sample code initializes a specific account and deactivates that account.

```
var acctUser = AccountUser.Init('myAccountUser', 123456789);
var status = acctUser.Deactivate();
```

You cannot delete an account user via server-side JavaScript.
