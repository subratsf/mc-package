---
data: <%= reference.api.functions.InvokeRetrieve %>
---
###Usage
```
SET @rr_1=CreateObject("RetrieveRequest")
SetObjectProperty(@rr_1,"ObjectType","Subscriber")
AddObjectArrayItem(@rr_1,"Properties","EmailAddress")
SET @sfp=CreateObject("SimpleFilterPart")
SetObjectProperty(@sfp,"Property","EmailAddress")
SetObjectProperty(@sfp,"SimpleOperator","equals")
AddObjectArrayItem(@sfp,"Value",@emailaddress)
SetObjectProperty(@rr_1,"Filter",@sfp)
SET @sub=InvokeRetrieve(@rr_1)
```