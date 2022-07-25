---
data: <%= reference.dataextension.functions.LookupOrderedRows %>
---
###Usage
```
Set @rows2 = LookupOrderedRows("Cars",4,"Horsepower Desc","MPG",Field(@cardata,"MPG"))
```
This call returns the 4 rows from the Cars data extension with the highest horsepower that match the value specified by MPG.
