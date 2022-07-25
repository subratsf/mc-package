---
title: Data Extension Functions
---

These functions allow access to the fields and rows contained within a data extension via server-side JavaScript.

##Load
In your server-side JavaScript code, load the core library using this syntax:

```
Platform.Load("core","1");
```

Use this sample code as a model to construct your own server-side JavaScript code.

##Enterprise and Enterprise 2.0 Account
These functions do not support the use of enterprise-level data extensions.

##Initialization
To interact with a data extension via server-side JavaScript, you must first initialize the object. This code initializes a data extension with the external key of birthdayDE.
```
var birthdayDE = DataExtension.Init("birthdayDE");
```
Once you initialize a data extension, you can use the Fields and Rows sub-objects in your server-side JavaScript code.
