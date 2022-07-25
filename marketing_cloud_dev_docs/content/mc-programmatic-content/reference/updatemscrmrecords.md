---
data: <%= reference.microsoftdynamics.functions.UpdateMscrmRecords %>
---
###Usage
```
%%[
/* Sample Code - this updates several lead records to have Web as a Lead Source Code in Dynamics CRM */
var @records_updated
set @records_updated = updatemscrmrecords('lead', '2E438216-2DEE-DD11-AB3E-005056AD58C4,0A167EEC-6436-DD11-B7BE-000E7F30252C', 'leadsourcecode', '8')
]%%
<p>Count of records updated:</p><br>
%%=v(@records_updated)=%%
```