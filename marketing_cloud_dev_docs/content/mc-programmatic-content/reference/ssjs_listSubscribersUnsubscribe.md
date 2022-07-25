---
data: <%= reference.ssjs_coreList.functions.SubscribersUnsubscribe %>
---

##Example
This sample code removes the specified subscriber from the list.
```
var myList = List.Init("myList");
var status = myList.Subscribers.Unsubscribe("aruiz@example.com");
```
