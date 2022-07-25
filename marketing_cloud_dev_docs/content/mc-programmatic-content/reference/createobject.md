---
data: <%= reference.api.functions.CreateObject %>
---
###Usage

```
SET @subscriber = CreateObject('Subscriber')
```

Creates a new Subscriber object for the web service API.

An object created with `CreateObject()` should only be used for one particular API call. So, if a Subscriber object is created and then updated via InvokeUpdate, it cannot be passed to a Triggered Send.