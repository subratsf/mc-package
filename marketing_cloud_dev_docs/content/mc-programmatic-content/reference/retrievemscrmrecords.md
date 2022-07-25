---
data: <%= reference.microsoftdynamics.functions.RetrieveMscrmRecords %>
---
###Usage
Select the name of the parent account by including parentaccount.id name in the list of fields. You can also filter on Many:1 lookup attributes by using the same nomenclature. To retrieve accounts where the parent account's name is Example.com, include 'parentaccountid.name','=','Example.com' in your filters. All values regularly retrieved in Fetch XML queries are returned. If parentaccount.id is one of the fields to be returned, the results will have columns parentaccountid, parentaccountid.name, and parentaccountid.type.
```
%%[
/* Sample Code - this retrieves all contacts where the first name is John */
var @records_retrieved, @counter, @firstname, @lastname, @id
set @records_retrieved = retrievemscrmrecords('contact', 'contactid,firstname,lastname', 'firstname', '=', 'john')
]%%
<p>Contacts:</p><br><br>
%%[
for @counter = 1 to rowcount(@records_retrieved) do
set @firstname = field(row(@records_retrieved,@counter),'firstname')
set @lastname = field(row(@records_retrieved,@counter),'lastname')
set @id = field(row(@records_retrieved,@counter),'contactid')
]%%
<p>First: &amp;nbsp; &amp;nbsp; %%=v(@firstname)=%% </p>
<p>Last: &amp;nbsp; &amp;nbsp; %%=v(@lastname)=%% </p>
<p>Id: &amp;nbsp; &amp;nbsp; %%=v(@id)=%% </p>  <br><br>
%%[next @counter ]%%
```