---
title: Subscriber Functions
---

The Subscriber Server-side JavaScript functions allow you to create, update, and unsubscribe subscribers as well as retrieve information about those subscribers.

##Load
In your server-side JavaScript code, first load the core library using this syntax:
```
Platform.Load("core", "1");
```
##Initialization
To interact with a subscriber via server-side JavaScript, you must first initialize the object. This code initializes a subscriber with the subscriber key of mySubscriber.
```
var sub = Subscriber.Init('mySubscriber');
```
