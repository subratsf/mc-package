---
data: <%= reference.content.functions.BuildRowSetFromString %>
---
###Usage
```
BuildRowsetFromString('123|456|789', '|')
```

Returns a rowset with three rows. However, this function returns the rowset in one column, and this column doesn't have an assigned name:
```
123 456 789
```

The sample code below demonstrates how to pass and process attribute names:
```
%%[
Var @queryparams
Var @row
Var @name
Var @value
Set @queryparams = BuildRowsetFromString(QueryParameter('names'),'|')
for @i = 1 to Rowcount(@queryparams) do
Set @row = Row(@queryparams, @i)
Set @name = Field(@row,1)
Set @value = QueryParameter(@name)
]%%
Passed <b>name:</b> %%= v(@name) =%% with <b>value:</b> %%= v(@value) =%%<br/>
%%[
next @i
]%%
```
When passed the input below:
```
names=career|firstname|lastname&career=marketer&firstname=Angela&lastname=Ruiz
```

The AMPscript returns the following:
```
Passed name: career with value: marketer
Passed name: firstname with value: Angela
Passed name: lastname with value: Ruiz
```
Because this function returns the rowset in one column, and this column does not have an assigned name, you refer to the column within a function using an ordinal number:
```
Field(Row(BuildRowSetFromString('123|456', '|'), 1), 1)
```
