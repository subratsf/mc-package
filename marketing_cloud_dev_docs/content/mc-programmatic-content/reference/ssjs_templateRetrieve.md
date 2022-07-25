---
data: <%= reference.ssjs_coreTemplate.functions.Retrieve %>
---

##Examples
This sample code retrieves a template based on the specified filter criteria:
```
var getTemplate = Template.Retrieve({Property:"CustomerKey",SimpleOperator:"equals",Value:"MyTemplate"});
```
This sample code queries across all applicable accounts and retrieves a template based on the filter criteria:
```
var query = {};

query.Filter = '{Property:"CustomerKey",SimpleOperator:"equals",Value:"MyTemplate"}';
query.QueryAllAccounts = true;

var getTemplate = Template.Retrieve(query);
```
