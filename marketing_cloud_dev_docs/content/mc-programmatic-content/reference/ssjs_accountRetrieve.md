---
data: <%= reference.ssjs_coreAccount.functions.Retrieve %>
---

##Examples
This sample code retrieves an account based on the specified filter criteria:

```
var getAcct = Account.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"MyAccount"});
```

This sample code queries across all applicable accounts and retrieves an account based on the filter criteria:

```
var query = {};

query.Filter = '{Property:"CustomerKey",SimpleOperator:"equals",Value:"MyAccount"}';
query.QueryAllAccounts = true;

var getAcct = Account.Retrieve(query);
```
