---
data: <%= reference.ssjs_coreSubscriber.functions.Upsert %>
---

##Example
This sample code updates the specified values for an existing subscriber or creates a new subscriber if necessary.
```
var newSubscriber = {
    "EmailAddress": "test.008@example.com",
    "SubscriberKey": "20100730001",
    "EmailTypePreference": "Text",
    "Attributes":{"First Name": "test.008", "Last Name": "test.008" },
    "Lists": {"Status": "Active", "ID": 12345, "Action": "Upsert"}
};

var subObj = Subscriber.Init("SubKey");
var status = subObj.Upsert(newSubscriber);
```
