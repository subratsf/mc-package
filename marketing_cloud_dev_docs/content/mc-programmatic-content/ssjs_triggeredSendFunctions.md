---
title: Triggered Send Functions
---

These functions allow access to the triggered email feature via server-side JavaScript.

##Load
In your server-side JavaScript code, first load the core library using this syntax:
```
Platform.Load("core","1");
```
Use this sample code as a model to construct your own server-side JavaScript code. You cannot use the associated functions in the context of an email message or email preview.

##Initialization
To use an object in conjunction with the Triggered Send Server-side JavaScript functions, you must first initialize that object. For example, if you plan to send to a triggered send using the external key value of "support", use this sample code to initialize that triggered send:
```
var triggeredSend = TriggeredSend.Init("support");
```
Once you initialize an object, you can use that object in conjunction with the associated functions.
