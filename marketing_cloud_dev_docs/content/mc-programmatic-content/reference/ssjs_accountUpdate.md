---
data: <%= reference.ssjs_coreAccount.functions.Update %>
---

If the passed attributes include TimeZoneID, the call uses that value to update the account time zone.

##Example
This sample code changes the FromName attribute of the account to the specified value:

```
var myAccount = Account.Init("MyCustomerKey");
var status = myAccount.Update({ "FromName" : "Demo From Name" });
```
