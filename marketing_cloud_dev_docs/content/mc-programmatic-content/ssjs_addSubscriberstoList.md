---
title: Add Subscribers to a List
---
```
var l = List.Init('MyList');
l.Subscribers.Add(Request.GetQueryStringParameter('Email Address'));
```
