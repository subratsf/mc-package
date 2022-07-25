---
data: <%= reference.api.functions.InvokeCreate %>
---
###Usage
Given the example below:

```
%%[
var @emailaddr
SET @emailaddr = 'help@example.com'
SET @ts = CreateObject('TriggeredSend')
SET @tsDef = CreateObject('TriggeredSendDefinition')
SET @ts_subkey = @emailaddr
SetObjectProperty(@tsDef, 'CustomerKey', 'VolConfirm')
SetObjectProperty(@ts, 'TriggeredSendDefinition', @tsDef)
SET @ts_sub = CreateObject('Subscriber')
SetObjectProperty(@ts_sub, 'EmailAddress', @emailaddr)
SetObjectProperty(@ts_sub, 'SubscriberKey', @ts_subkey)
AddObjectArrayItem(@ts, 'Subscribers', @ts_sub)
SET @ts_statusCode = InvokeCreate(@ts, @ts_statusMsg, @errorCode)
IF @ts_statusCode != 'OK' THEN
RaiseError(@ts_statusMsg, 0, @ts_statusCode, @errorCode)
ENDIF
]%%
```

The AMPscript creates the TriggeredSend and TriggeredSendDefinition objects as @ts and @tsDef. It also assigns the correct properties to the objects and passes the object into the InvokeCreate call. The InvokeCreate call returns a status code and status message by which exception handling can be built. In this example, the AMPscript returns an error to the screen.