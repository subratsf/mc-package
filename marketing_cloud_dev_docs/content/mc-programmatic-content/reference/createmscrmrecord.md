---
data: <%= reference.microsoftdynamics.functions.CreateMscrmRecord %>
---
###Usage
```
%%[

/* Sample Code - this creates a new Contact record */

var @contact_guid

set @contact_guid = createmscrmrecord('contact', 3, 'firstname', 'bob', 'lastname', 'testcontact', 'emailaddress1', 'bob@example.com')

]%%

<p>GUID of new Contact:</p><br>

%%=v(@contact_guid)=%%
```
