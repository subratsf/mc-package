---
title: Retrieve Rows from a Data Extension
---

Use AMPscript contained in a landing page to interact with the web service API to retrieve rows from a data extension. For example, you can pull back information from a data extension to segment out subscribers who opened email from you within the past 6 weeks. This code returns the name and values of all information within a data extension.

Use this sample AMPscript as a model to create your own script.

```
%%[
VAR @retrieveRequest, @simpleFilterPart, @subscribers, @i, @currentSub, @currentSubAttribs, @j, @currentSubAttrib, @filter
VAR @properties, @Field1, @Field2, @numofProperties, @currentProp

/* Create and populate a RetrieveRequest */
SET @retrieveRequest = CreateObject("RetrieveRequest")
SetObjectProperty(@retrieveRequest, "ObjectType", "DataExtensionObject[ExampleDataExtension]")

AddObjectArrayItem(@retrieveRequest, "Properties","Field1")
AddObjectArrayItem(@retrieveRequest, "Properties","Field2")

/* Execute the Retrieve */
SET @emails = InvokeRetrieve(@retrieveRequest)

SET @emailCount = RowCount(@emails)
/* Iterate over the subscribers */

]%%
<br /><br />

%%[
FOR @i = 1 to @emailCount DO
    SET @currentSub = Row(@emails, @i)
    SET @properties = Field(@currentSub,"Properties")
    Set @numofProperties = ROWCOUNT(@properties)

FOR @j = 1 to @numofProperties DO
    
    SET @currentProp = Row(@properties, @j)
    Set @Field1= FIELD(@currentProp ,"Name") 
    Set @Field2= FIELD(@currentProp ,"Value") 
    
]%%

%%[if @j == @numofProperties then ]%%
<b>%%=v(@Field2)=%%</b>
%%[else]%%
%%=v(@count)=%%:
%%[endif]%%

%%[
NEXT @j
]%%
<br /><br />
%%[
NEXT @i
]%%
```