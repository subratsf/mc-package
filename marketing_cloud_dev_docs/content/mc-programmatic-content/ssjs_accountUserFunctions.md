---
Title: AccountUser Server-Side JavaScript Functions
---

Use AccountUser Server-side JavaScript functions to access and modify users authorized to work within your Marketing Cloud account.

##Load
In your server-side JavaScript code, first load the core library using the syntax below:

```
Platform.Load("core", "1");
```

##Initialization
To interact with an AccountUser via server-side JavaScript, you must first initialize the object. This code initializes an account user with the external key of myAccountUser and the client ID belonging to the AccountUser with the rights to manipulate other users:

```
var targetUserKey = 'myAccountUser';
var myClientID = 123456789;

var acctUser = AccountUser.Init(targetUserKey, myClientID);
```
