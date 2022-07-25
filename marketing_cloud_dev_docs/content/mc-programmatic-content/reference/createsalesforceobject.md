---
data: <%= reference.salesforce.functions.CreateSalesforceObject %>
---
###Usage
> The object types and field names in this example may not match your implementation. Use the object types and field names that are specific to your account.

```
%%[ var @id
set @id=CreateSalesforceObject('lead', 2, 'FirstName', 'Chris', 'LastName', 'Cruz')
]%%
```
The system creates a lead in the integrated Salesforce account where the FirstName field contains Chris and the LastName field contains Cruz.
