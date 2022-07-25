---
data: <%= reference.api.functions.InvokeUpdate %>
---
###Usage
```
SET @sub = CreateObject("Subscriber")
SetObjectProperty(@sub,"EmailAddress", @email)
SetObjectProperty(@sub,"SubscriberKey", @subkey)

SET @cid = CreateObject("ClientID")
SetObjectProperty(@cid, "ID", "1234567")
SetObjectProperty(@cid, "IDSpecified", "true")
SetObjectProperty(@sub, "Client", @cid)
 
SetObjectProperty(@sub,"Status","Active")
Set @options = CreateObject("UpdateOptions")
Set @save = CreateObject("SaveOption")
SetObjectProperty(@save,"SaveAction","UpdateAdd")
SetObjectProperty(@save,"PropertyName","*")
AddObjectArrayItem(@options,"SaveOptions", @save)
/* Here is where we actually update the Subscriber object */
Set @update_sub = InvokeUpdate(@sub, @update_sub_status, @update_sub_errorcode, @options)
```