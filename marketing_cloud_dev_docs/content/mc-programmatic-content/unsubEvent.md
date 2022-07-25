---
title: Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call
---

This call allows you to unsubscribe a subscriber and log an UnsubEvent that is tracked against a specific Job. Use this call when you create your own landing page or profile center functionality.

Use this sample AMPscript as a model for your own call.

```
VAR @sid, @jid, @reason, @lue, @lue_prop, @lue_statusCode, @overallStatus, @requestId, @Response, @Status, @Error

SET @sid = IIF(Empty(RequestParameter("email_address")),RequestParameter("current_email_address"),RequestParameter("email_address"))
SET @jid = RequestParameter("jobid")
SET @listid = RequestParameter("listid")
SET @batchid = RequestParameter("batchid")
SET @reason = "Profile Center Unsubscribe"

SET @lue = CreateObject("ExecuteRequest")
SetObjectProperty(@lue,"Name","LogUnsubEvent")
                                
SET @lue_prop = CreateObject("APIProperty")                 
SetObjectProperty(@lue_prop, "Name", "SubscriberKey")
SetObjectProperty(@lue_prop, "Value", @sid)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)

SET @lue_prop = CreateObject("APIProperty")
SetObjectProperty(@lue_prop, "Name", "JobID")
SetObjectProperty(@lue_prop, "Value", @jid)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)

SET @lue_prop = CreateObject("APIProperty")
SetObjectProperty(@lue_prop, "Name", "ListID")
SetObjectProperty(@lue_prop, "Value", @listid)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)
                
SET @lue_prop = CreateObject("APIProperty")
SetObjectProperty(@lue_prop, "Name", "BatchID")
SetObjectProperty(@lue_prop, "Value", @batchid)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)SET @lue_prop = CreateObject("APIProperty")
SetObjectProperty(@lue_prop, "Name", "Reason")
SetObjectProperty(@lue_prop, "Value", @reason)
AddObjectArrayItem(@lue, "Parameters", @lue_prop)

/* You must set ClientID when working with On Your Behalf accounts
var @lue_oyb; 
set @lue_oyb = CreateObject('ClientID') 
SetObjectProperty(@lue_oyb, 'ID', @mid)
SetObjectProperty(@lue, 'Client', @lue_oyb)
*/
                
SET @lue_statusCode = InvokeExecute(@lue, @overallStatus, @requestId)

SET @Response = Row(@lue_statusCode, 1)
SET @Status = Field(@Response,"StatusMessage")
SET @Error = Field(@Response,"ErrorCode")
```