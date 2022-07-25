---
title: Send Functions
---

These functions allow you to access and control how emails are sent via your Marketing Cloud account.

##Load
In your server-side JavaScript code, first load the core library using the syntax below:
```
Platform.Load("core","1");
```
Use this sample code as a model for your own server-side JavaScript code.

##Initialization
To interact with an existing send via server-side JavaScript, you must first initialize the object. This code initializes a send with a send ID of 12345:
```
var s = Send.Init(12345);
```
Once you initialize the send, you can use the other applicable functions.
