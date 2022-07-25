---
data: <%= reference.microsoftdynamics.functions.RetrieveMscrmRecordsFetchXML %>
---
###Usage
```
SET @FetchXML = concat('<fetch mapping='logical' count='1' version='1.0'> <entity name='contact'> <attribute name='contactid' /> <attribute name='emailaddresstring' /> <attribute name='firstname' /> <attribute name='lastname' /> <filter> <condition attribute='contactid' operator='eq' value='', @SubscriberKey, '' /> </filter> </entity></fetch>') 
SET @RowSet_All = RetrieveMscrmRecordsFetchXML(@FetchXML) 
IF Rowcount(@RowSet_All) >= 1 Then
	SET @RowSet = Row(@RowSet_All, 1)
	SET @contactid = Field(@Rowset,'contactid', 0)
	SET @emailaddresstring = Field(@Rowset,'emailaddresstring', 0)
	SET @firstname = Field(@Rowset,'firstname', 0)
	SET @lastname = Field(@Rowset,'lastname', 0)
ENDIF
```