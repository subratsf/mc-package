---
data: <%= reference.microsoftdynamics.functions.DescribeMscrmEntities %>
---
###Usage
```
%%[
/* Sample code to get a list of all entities in a Dynamics CRM account to a record set */
var @entities_rs
set @entities_rs = describemscrmentities()
]%%
<p> Here is a list of CRM Entities </p>
%%[
var @entity_name, @entity_displayname, @counter
for @counter = 1 to rowcount(@entities_rs) do
set @entity_name = field(row(@entities_rs,@counter), 'Name')
set @entity_displayname = field(row(@entities_rs,@counter), 'DisplayName')
]%%
Entity Name: &amp;nbsp; &amp;nbsp; %%=v(@entity_name)=%% <br>
Entity Display Name: &amp;nbsp; &amp;nbsp; %%=v(@entity_displayname)=%% <br> <br><br>
%%[ next @counter ]%%
```