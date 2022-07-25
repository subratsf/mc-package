---
title: "Filter Definition Functions"
---

The Filter Definition Server-side JavaScript functions allow you to manipulate data filters via server-side JavaScript in these ways:

* Create
* Retrieve
* Update
* Delete

##Load
In your server-side JavaScript code, first load the core library using this syntax:
```
Platform.Load("core","1");
```

Initialize
To interact with a filter definition via server-side JavaScript, you must first initialize the object. The code below initializes a filter definition with the external key of myFilterDef.
```
var fd = FilterDefinition.Init("myFilterDef");
```
Once you initialize the filter definition, you can use the applicable server-side JavaScript functions.
