---
title: Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call
---

This call allows you to unsubscribe a subscriber and log an UnsubEvent that is tracked against a specific Job. Use this call when you create your own landing page or profile center functionality.

Use this sample server-side JavaScript as a model for your own call:
```
var lue, lue_prop, Response;

lue = Platform.Function.CreateObject("ExecuteRequest");
Platform.Function.SetObjectProperty(lue,"Name","LogUnsubEvent");

//For accounts using the subscriber key functionality
lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "SubscriberKey");
Platform.Function.SetObjectProperty(lue_prop, "Value", subkey);
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

//For accounts not using the subscriber key functionality
//lue_prop = Platform.Function.CreateObject("APIProperty");
//Platform.Function.SetObjectProperty(lue_prop, "Name", "EmailAddress");
//Platform.Function.SetObjectProperty(lue_prop, "Value", subkey);
//Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "JobID");
Platform.Function.SetObjectProperty(lue_prop, "Value", jid);
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "ListID");
Platform.Function.SetObjectProperty(lue_prop, "Value", lid);
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "BatchID");
Platform.Function.SetObjectProperty(lue_prop, "Value", bid);
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);                                                

lue_prop = Platform.Function.CreateObject("APIProperty");
Platform.Function.SetObjectProperty(lue_prop, "Name", "Reason");
Platform.Function.SetObjectProperty(lue_prop, "Value", "Profile Center Unsubscribe");
Platform.Function.AddObjectArrayItem(lue, "Parameters", lue_prop);

var statusAndRequest = [0,0];

Response = Platform.Function.InvokeExecute(lue, statusAndRequest);
```
