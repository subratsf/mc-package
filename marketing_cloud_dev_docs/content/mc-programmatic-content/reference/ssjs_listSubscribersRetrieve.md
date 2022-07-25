---
data: <%= reference.ssjs_coreList.functions.SubscribersRetrieve %>
---

##Example
This sample code returns a list of subscribers based on the specified criteria.
```
var myList = List.Init('MyList');
var subs = myList.Subscribers.Retrieve({Property:"CustomerID", SimpleOperator:"equals", Value:"TestList"});
```
