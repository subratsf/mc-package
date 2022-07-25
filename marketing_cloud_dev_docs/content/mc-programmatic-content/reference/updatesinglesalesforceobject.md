---
data: <%= reference.salesforce.functions.UpdateSingleSalesforceObject %>
---
###Usage
```
%%[
var @result
set @result = UpdateSingleSalesforceObject('Lead','00Q00003yAEj','Email','jcc@example.com')
]%%
The system updates the Email field on the Lead with ID 00Q00003yAEj to contain jcc@example.com.
```
To set a value within an existing record to NULL (setting Phone value to NULL in this example):
```
%%[
var @result
set @result = UpdateSingleSalesforceObject('Lead','00Q00003yAEj','fieldsToNull','Phone')
]%%
The system updates the Phone field for the Lead with ID 00Q00003yAEj to a blank/NULL value.
```
