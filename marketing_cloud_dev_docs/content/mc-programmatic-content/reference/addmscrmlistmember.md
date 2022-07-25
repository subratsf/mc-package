---
data: <%= reference.microsoftdynamics.functions.AddMscrmListMember %>
---
###Usage
```
%%[
/* Adds a lead, contact or account to a marketing list */
var @guid, @list_guid
set @guid = '2E438216-2DEE-DD11-AB3E-005056AD58C4'
set @list_guid = '0A167EEC-6436-DD11-B7BE-000E7F30252C'
AddMscrmListMember(@guid, @list_guid)
]%%
```