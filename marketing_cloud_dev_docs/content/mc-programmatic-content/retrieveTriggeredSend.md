---
title: Retrieve Triggered Send Definition Properties
---

Use this code as a model to retrieve properties of a triggered send definition for display on a landing page.

If you use an Enterprise 2.0 account, you can specify a ClientID value for the MID of the business unit in a filter to retrieve results only from that business unit.

```
%%[    
SET @rr = CreateObject("RetrieveRequest")  
SetObjectProperty(@rr, "ObjectType", "TriggeredSendDefinition")  
AddObjectArrayItem(@rr,"Properties","CustomerKey")  
AddObjectArrayItem(@rr,"Properties","Name")  
AddObjectArrayItem(@rr,"Properties","TriggeredSendStatus")   

SET @sfp = CreateObject("SimpleFilterPart")  
SetObjectProperty(@sfp, "Property", "TriggeredSendStatus")  
SetObjectProperty(@sfp, "SimpleOperator", "equals")  
AddObjectArrayItem(@sfp, "Value", "Active")    
SetObjectProperty(@rr, "Filter", @sfp)  
SET @tsd = InvokeRetrieve(@rr)  

FOR @c = RowCount(@tsd) DOWNTO 1  DO    
SET @row = Row(@tsd ,@c)   
SET @TSDName = Field(@row ,'Name')   
SET @TSDKey = Field(@row ,'CustomerKey')   
]%%

Name: %%=v(@TSDName)=%%<br /> =
Key: %%=v(@TSDKey)=%%<br /><br />%%[NEXT @c]%%
```