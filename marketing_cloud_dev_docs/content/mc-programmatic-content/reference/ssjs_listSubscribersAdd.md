---
data: <%= reference.ssjs_coreList.functions.SubscribersAdd %>
---

##Example
This sample code adds the subscriber and that subscriber's first and last names.
```
var myList = List.Init("myList");
var status = myList.Subscribers.Add("aruiz@example.com",{FirstName:"Angel",LastName:"Ruiz"});
```
