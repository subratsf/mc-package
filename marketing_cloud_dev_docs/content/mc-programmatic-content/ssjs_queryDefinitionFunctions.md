---
title: Query Definition Functions
---

The Query Definition server-side JavaScript functions allow you to manipulate queries via server-side JavaScript in the following ways:

* Create
* Retrieve
* Update
* Delete
* Run

##Load
In your server-side JavaScript code, first load the core library using this syntax:
```
Platform.Load("core","1");
```

##Initialize

To interact with a query definition via server-side JavaScript, you must first initialize the object. The code below initializes a query definition with the external key of 'myQueryDef'.
```
var qd = QueryDefinition.Init("myQueryDef");
```
Once you initialize the query definition, you can use the applicable server-side JavaScript functions.
