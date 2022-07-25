---
data: <%= reference.api.functions.InvokeExecute %>
---
###Usage
Given the example below:

```
SET @lue = CreateObject('ExecuteRequest')
SetObjectProperty(@lue,'Name','LogUnsubEvent')

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'SubscriberKey')
SetObjectProperty(@lue_prop, 'Value', @SubscriberID)
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'JobID')
SetObjectProperty(@lue_prop, 'Value', @JobID)
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'ListID')
SetObjectProperty(@lue_prop, 'Value', @ListID)
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'BatchID')
SetObjectProperty(@lue_prop, 'Value', @BatchID)
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_prop = CreateObject('APIProperty')
SetObjectProperty(@lue_prop, 'Name', 'Reason')
SetObjectProperty(@lue_prop, 'Value', 'Custom Unsubscribe Page')
AddObjectArrayItem(@lue, 'Parameters', @lue_prop)

SET @lue_statusCode = InvokeExecute(@lue, @overallStatus, @requestId)
SET @Response = Row(@lue_statusCode, 1)
SET @Status = Field(@Response,'StatusMessage')
SET @Error = Field(@Response,'ErrorCode')

IF (@Error == '12012') OR (@Error == '401') OR (@Status == 'Event posted') THEN
/* Succeeded */
ELSE
/* Failed */
ENDIF
```
The code sets up and executes a LogUnsubEvent and succeeds if the operation completes (or when the specified error codes indicate the subscriber was already unsubscribed).