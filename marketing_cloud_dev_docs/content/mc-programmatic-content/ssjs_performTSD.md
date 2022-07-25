---
title: Perform a Triggered Send Definition
---
```
var ts = TriggeredSend.Init('welcome');
var status = ts.Send(Request.GetQueryStringParameter('Email Address'));
```
OR
```
var status = TriggeredSend.Init('welcome').Send(Request.GetQueryStringParameter('Email Address'),{Attr:2});
```
