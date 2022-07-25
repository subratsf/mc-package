---
data: <%= reference.ssjs_coreAccountUser.functions.Add %>
---

##Example
This sample code adds a new account user and specifies both a default business unit as well as associated business units for the user based on the provided external keys:

```
var newUser = {
    "Name" : "Andrea Cruz",
    "UserID" : "acruz",
    "Password" : "PASSWORD",
    "Email" : "acruz@example.com",
    "ClientID" : 123456789,
    "DefaultBusinessUnitKey": "childBUKey",
    "AssociatedBusinessUnits" : ["childBUKey", "grandchildBUKey"]
};

var status = AccountUser.Add(newUser);
```
