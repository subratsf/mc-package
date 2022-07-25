---
data: <%= reference.ssjs_coreSubscriber.functions.Add %>
---

##Example
This sample code adds a subscriber to the specified list:
```
var newSubscriber = {
    "EmailAddress": "test.008@example.com",
    "SubscriberKey": "20100730001",
    "EmailTypePreference": "Text",
    "Attributes":{"First Name": "test.008", "Last Name": "test.008" },
    "Lists": {"Status": "Active", "ID": 12345, "Action": "Create"}
};

var status = Subscriber.Add(newSubscriber);
```
