---
data: <%= reference.ssjs_coreList.functions.SubscribersUpdate %>
---

##Example
This sample code sets the status of the subscriber to active.
```
var myList = List.Init("myList");
var status = myList.Subscribers.Update("aruiz@example.com","Active");
```
