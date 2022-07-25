---
title: Email functions
---

These functions allow you to access and control email messages within your Marketing Cloud account.

##Load
Use the Email Server-Side JavaScript Functions
In your server-side JavaScript code, first load the core library using the syntax below:
```
Platform.Load("core", "1");
```
##Initialization
To interact with an email via server-side JavaScript, you must first initialize the object. The code below initializes an email with the external key of 'myEmail'.
```
var myEmail = Email.Init("myEmail");
```
Once you initialize the email, you can use the associated functions.

You cannot set the external key for an email message manually via the user interface. You can manually set the external key of an email address created via the SOAP API, or you can find the appropriate value by performing a retrieve on the email message and taking the value from the results.
