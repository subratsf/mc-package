---
data: <%= reference.ssjs_coreSubscriber.functions.Update %>
---

##Example
This sample code updates a currently existing subscriber.
```
var subscriber = {
    "EmailTypePreference": "HTML",
    "Attributes":{"First Name": "Test", "Last Name": "User"}
};

var subObj = Subscriber.Init("SubKey");
var status = subObj.Update(subscriber);
```
