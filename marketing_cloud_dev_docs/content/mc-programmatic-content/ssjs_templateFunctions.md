---
title: Template Functions
---

Use these functions to interact with templates within a Marketing Cloud account.

##Load
In your server-side JavaScript code, first load the core library using this syntax:
```
Platform.Load("core", "1");
```
##Initialization
To interact with a template via server-side JavaScript, you must first initialize the object. The code below initializes a list with the external key of 'myTemplate'.
```
var t = Template.Init('myTemplate');
```
