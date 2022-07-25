---
data: <%= reference.ssjs_coreList.functions.SubscribersUpsert %>
---

##Example
This sample code adds the specified values to the subscriber.
```
var myList = List.Init("myList");
var status = myList.Subscribers.Upsert("aruiz@example.com",{ZipCode:"46202"});
```
