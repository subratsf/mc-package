---
data: <%= reference.microsoftdynamics.functions.DescribeMscrmEntityAttributes %>
---
###Usage
```
%%[

var @fields_rs

set @fields_rs = describemscrmentityattributes('lead')

]%%

<p> Here is a list of Fields in the Lead Entity </p>

%%[

var @field_name, @field_displayname, @counter, @field_type, @field_required, @field_options

for @counter = 1 to rowcount(@fields_rs) do

set @field_name = field(row(@fields_rs,@counter), 'Name')

set @field_displayname = field(row(@fields_rs,@counter), 'DisplayName')

set @field_type = field(row(@fields_rs,@counter), 'Type')

set @field_required = field(row(@fields_rs,@counter), 'Required')

set @field_options = field(row(@fields_rs,@counter), 'Options')

]%%

Field Name: &nbsp; &nbsp; %%=v(@field_name)=%% <br>

Field Display Name: &nbsp; &nbsp; %%=v(@field_displayname)=%% <br>

Field Type: &nbsp; &nbsp; %%=v(@field_type)=%% <br>

Field Required?: &nbsp; &nbsp; %%=v(@field_required)=%% <br>

Field Options: &nbsp; &nbsp; %%=v(@field_options)=%% <br> <br><br>

%%[ next @counter ]%%
```